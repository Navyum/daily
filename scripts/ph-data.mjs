import { readFile, readdir } from "node:fs/promises";
import { basename } from "node:path";

export const siteHostname = "https://github.camscanner.top";
export const base = "/daily/";
export const postsDir = new URL("../docs/_posts/", import.meta.url);

export const escapeHtml = (value = "") =>
  String(value)
    .replace(/&(?!(?:[a-z]+|#[0-9]+|#x[0-9a-f]+);)/gi, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export const escapeAttr = (value = "") =>
  escapeHtml(value).replace(/"/g, "&quot;");

export const parseFrontmatter = (source) => {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) return { frontmatter: {}, content: source };

  const frontmatter = {};

  for (const line of match[1].split("\n")) {
    const item = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);

    if (item) frontmatter[item[1]] = item[2].replace(/^["']|["']$/g, "");
  }

  return { frontmatter, content: match[2] };
};

const cleanText = (value = "") =>
  value
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/!\[[^\]]*]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/\*\*|【|】/g, "")
    .replace(/\s+/g, " ")
    .trim();

const getField = (section, label) => {
  const match = section.match(
    new RegExp(
      String.raw`\*\*(?:【)?${label}(?:】)?\*\*：\s*([\s\S]*?)(?=<br\s*\/?>|\n\*\*|$)`,
      "i",
    ),
  );

  return cleanText(match?.[1] ?? "");
};

const getLinkField = (section, label) => {
  const match = section.match(
    new RegExp(
      String.raw`\*\*(?:【)?${label}(?:】)?\*\*：\s*\[([^\]]+)]\(([^)]+)\)`,
      "i",
    ),
  );

  return match?.[2] ?? "";
};

const parseProducts = (content) => {
  const sections = content.split(/\n---\n/g);
  const products = [];

  for (const section of sections) {
    const heading = section.match(/^##\s+\[TOP(\d+)\s+([^\]]+)]\(([^)]+)\)/m);

    if (!heading) continue;

    const image = section.match(/!\[([^\]]*)]\(([^)\s]+)(?:\s+"[^"]*")?\)/);
    const votesText = getField(section, "票数");
    const keywords = cleanText(
      section.match(
        /\*\*关键词\*\*：\s*([\s\S]*?)(?=<br\s*\/?>|\n\*\*|$)/i,
      )?.[1] ?? "",
    )
      .split(/[，,]/)
      .map((item) => item.trim())
      .filter(Boolean);

    products.push({
      rank: Number(heading[1]),
      name: cleanText(heading[2]),
      tagline: getField(section, "标语"),
      description: getField(section, "介绍"),
      image: image?.[2] ?? "",
      imageAlt: image?.[1] ?? cleanText(heading[2]),
      websiteUrl: getLinkField(section, "官网"),
      productHuntUrl: getLinkField(section, "Product Hunt") || heading[3],
      keywords,
      votes: Number(votesText.replace(/[^\d]/g, "")) || 0,
      featured: getField(section, "是否精选") === "是",
      publishedAt: getField(section, "发布时间"),
    });
  }

  return products.sort((a, b) => a.rank - b.rank);
};

export const getPHFiles = async () =>
  (await readdir(postsDir))
    .filter((file) => /^PH-daily-\d{4}-\d{2}-\d{2}\.md$/.test(file))
    .sort();

export const getRoutePath = (file) => `/posts/${basename(file, ".md")}.html`;

export const getCanonicalUrl = (routePath) =>
  new URL(`${base.replace(/\/$/, "")}${routePath}`, siteHostname).href;

export const readPHDay = async (file) => {
  const source = await readFile(new URL(file, postsDir), "utf8");
  const { frontmatter, content } = parseFrontmatter(source);
  const title = frontmatter.title || basename(file, ".md");
  const routePath = getRoutePath(file);
  const products = parseProducts(content);

  return {
    file,
    title,
    date: frontmatter.date || basename(file, ".md").replace("PH-daily-", ""),
    routePath,
    url: getCanonicalUrl(routePath),
    products,
    productCount: products.length,
    topProduct: products[0] ?? null,
  };
};

export const readAllPHDays = async () => {
  const files = await getPHFiles();
  const days = await Promise.all(files.map((file) => readPHDay(file)));

  return days.sort((a, b) => b.date.localeCompare(a.date));
};
