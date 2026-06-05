import { webpackBundler } from "@vuepress/bundler-webpack";
import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { readdirSync } from "node:fs";

import theme from "./theme.js";

const siteHostname = "https://github.camscanner.top";
const vuePressPostLimit = Number(process.env.DAILY_VUEPRESS_POST_LIMIT ?? 60);

const getVuePressPostPagePatterns = (): string[] =>
  readdirSync(new URL("../_posts/", import.meta.url))
    .filter((file) => /^PH-daily-\d{4}-\d{2}-\d{2}\.md$/.test(file))
    .sort()
    .reverse()
    .slice(0, vuePressPostLimit)
    .map((file) => `_posts/${file}`);

const getCanonicalUrl = (base: string, path: string): string =>
  new URL(`${base.replace(/\/$/, "")}${path}`, siteHostname).href;

const canonicalPlugin = () => ({
  name: "daily-canonical",
  extendsPage: (page, app) => {
    const head = Array.isArray(page.frontmatter.head)
      ? page.frontmatter.head.filter(
          (item) => item?.[0] !== "link" || item?.[1]?.rel !== "canonical",
        )
      : [];

    page.frontmatter.head = [
      ...head,
      [
        "link",
        {
          rel: "canonical",
          href: getCanonicalUrl(app.options.base, page.path),
        },
      ],
    ];
  },
});

export default defineUserConfig({
  // 网站路径默认为主域名。如果网站部署在子路径下，比如 xxx.com/yyy，那么 base 应该被设置为 "/yyy/"
  base: "/daily/",

  // 网站语言，默认为中文
  lang: "zh-CN",
  // 网站标题
  title: "DAYHACK",
  // 网站描述
  description:
    "每日追踪 Product Hunt 与 GitHub 热门项目，整理产品趋势、开源工具和效率应用。",

  head: [["meta", { name: "theme-color", content: "#da552f" }]],

  theme,
  // 大量历史榜单页面会放大预取带宽和首屏 CPU 成本，先关闭全站预取。
  shouldPrefetch: false,

  // 修改页面模板，https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/packages/theme/templates/index.build.html
  // 配置参考：https://vuepress.github.io/zh/reference/theme-api.html#templatebuild
  templateBuild: "./docs/.vuepress/templateBuild.html",

  // 禁止文件夹生成静态文件，参考 [VuePress 文档]（https://v2.vuepress.vuejs.org/zh/guide/page.html#routing）
  pagePatterns: [
    "*.md",
    "github/**/*.md",
    ...getVuePressPostPagePatterns(),
    "!_temp",
    "!reading",
    "!.vuepress",
    "!node_modules",
  ],

  plugins: [
    canonicalPlugin(),

    // 谷歌分析
    googleAnalyticsPlugin({
      // 设置你的 Analytics ID
      id: "G-0FQ4HVZR9S",
    }),
  ],
  bundler: webpackBundler({
    postcss: {},
    vue: {},
  }),
});
