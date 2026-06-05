import type { VNode } from "vue";
import { defineComponent, h, onMounted, ref } from "vue";
import { withBase } from "vuepress/client";

type Product = {
  rank: number;
  name: string;
  tagline: string;
  image: string;
  websiteUrl: string;
  productHuntUrl: string;
  keywords: string[];
  votes: number;
  featured: boolean;
};

type Day = {
  title: string;
  date: string;
  routePath: string;
  productCount: number;
  topProduct: Product | null;
  topProducts: Product[];
};

type PHIndex = {
  totalDays: number;
  latestDate: string;
  oldestDate: string;
  days: Day[];
};

const formatVotes = (votes: number): string =>
  votes > 0 ? `▲ ${votes.toLocaleString("en-US")}` : "票数待更新";

const getHttpUrl = (value: string): string => {
  try {
    const url = new URL(value);

    return url.protocol === "http:" || url.protocol === "https:"
      ? url.href
      : "";
  } catch {
    return "";
  }
};

const renderProduct = (product: Product): VNode => {
  const imageUrl = getHttpUrl(product.image);
  const websiteUrl = getHttpUrl(product.websiteUrl);
  const productHuntUrl = getHttpUrl(product.productHuntUrl);

  return h("article", { class: "ph-daily-card" }, [
    h("div", { class: "ph-daily-rank" }, `TOP${product.rank}`),
    imageUrl
      ? h("img", {
          class: "ph-daily-image",
          src: imageUrl,
          alt: product.name,
          loading: "lazy",
          decoding: "async",
        })
      : null,
    h("div", { class: "ph-daily-body" }, [
      h("div", { class: "ph-daily-meta" }, [
        h("span", product.featured ? "精选" : "上榜"),
        h("span", formatVotes(product.votes)),
      ]),
      h("h3", product.name),
      product.tagline
        ? h("p", { class: "ph-daily-tagline" }, product.tagline)
        : null,
      product.keywords.length
        ? h(
            "ul",
            { class: "ph-daily-tags" },
            product.keywords
              .slice(0, 4)
              .map((keyword) => h("li", { key: keyword }, keyword)),
          )
        : null,
      h("div", { class: "ph-daily-actions" }, [
        websiteUrl
          ? h(
              "a",
              {
                class: "ph-daily-button ph-daily-button-primary",
                href: websiteUrl,
                target: "_blank",
                rel: "noopener noreferrer",
              },
              "官网",
            )
          : null,
        productHuntUrl
          ? h(
              "a",
              {
                class: "ph-daily-button",
                href: productHuntUrl,
                target: "_blank",
                rel: "noopener noreferrer",
              },
              "PH",
            )
          : null,
      ]),
    ]),
  ]);
};

export default defineComponent({
  name: "PHDailyLanding",

  setup() {
    const data = ref<PHIndex | null>(null);
    const error = ref(false);

    onMounted(async () => {
      try {
        const response = await fetch(withBase("/ph-daily-index.json"));

        if (!response.ok) throw new Error(`PH index ${response.status}`);

        data.value = (await response.json()) as PHIndex;
      } catch {
        error.value = true;
      }
    });

    return (): VNode => {
      const latest = data.value?.days[0];
      const recentDays = data.value?.days.slice(0, 8) ?? [];

      return h(
        "section",
        { class: "ph-daily-panel", "aria-label": "PH 每日产品榜" },
        [
          h("div", { class: "ph-daily-header" }, [
            h("div", [
              h("p", { class: "ph-daily-eyebrow" }, "Product Hunt Daily"),
              h("h2", "每日产品榜单"),
              h(
                "p",
                { class: "ph-daily-summary" },
                data.value
                  ? `已收录 ${data.value.totalDays} 天榜单，覆盖 ${data.value.oldestDate} 至 ${data.value.latestDate}。`
                  : "正在加载最新 Product Hunt 热门产品、关键词与访问入口。",
              ),
            ]),
            latest
              ? h(
                  "a",
                  {
                    class: "ph-daily-latest-link",
                    href: withBase(latest.routePath),
                  },
                  `查看 ${latest.date}`,
                )
              : null,
          ]),
          error.value
            ? h(
                "p",
                { class: "ph-daily-state" },
                "PH 结构化数据暂时不可用，请稍后刷新。",
              )
            : null,
          latest
            ? h("div", { class: "ph-daily-spotlight" }, [
                h("div", { class: "ph-daily-date" }, [
                  h("span", "最新榜单"),
                  h("strong", latest.date),
                  h("span", `${latest.productCount} 个产品`),
                ]),
                h(
                  "div",
                  { class: "ph-daily-grid" },
                  latest.topProducts.map((product) =>
                    h("div", { key: product.name }, renderProduct(product)),
                  ),
                ),
              ])
            : h("p", { class: "ph-daily-state" }, "正在读取榜单数据..."),
          recentDays.length
            ? h(
                "nav",
                { class: "ph-daily-days", "aria-label": "近期 PH 榜单" },
                [
                  h("span", "近期日期"),
                  ...recentDays.map((day) =>
                    h(
                      "a",
                      { key: day.date, href: withBase(day.routePath) },
                      day.date.slice(5),
                    ),
                  ),
                ],
              )
            : null,
        ],
      );
    };
  },
});
