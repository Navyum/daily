import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename } from "node:path";

import {
  base,
  escapeAttr,
  escapeHtml,
  getCanonicalUrl,
  getPHFiles,
  readPHDay,
  siteHostname,
} from "./ph-data.mjs";

const distDir = new URL("../docs/.vuepress/dist/", import.meta.url);
const distPostsDir = new URL("../docs/.vuepress/dist/posts/", import.meta.url);

const getStyles = async () => {
  try {
    const indexHtml = await readFile(new URL("index.html", distDir), "utf8");

    return [...indexHtml.matchAll(/<link rel="stylesheet"[^>]+>/g)].map(
      (match) => match[0],
    );
  } catch {
    return [];
  }
};

const renderActions = (product) =>
  [
    product.websiteUrl
      ? `<a class="ph-product-button ph-product-button-primary" href="${escapeAttr(product.websiteUrl)}" target="_blank" rel="noopener noreferrer">官网</a>`
      : "",
    product.productHuntUrl
      ? `<a class="ph-product-button" href="${escapeAttr(product.productHuntUrl)}" target="_blank" rel="noopener noreferrer">Product Hunt</a>`
      : "",
  ].join("");

const renderKeywords = (keywords) =>
  keywords.length
    ? `<ul class="ph-product-tags">${keywords
        .slice(0, 6)
        .map((keyword) => `<li>${escapeHtml(keyword)}</li>`)
        .join("")}</ul>`
    : "";

const renderProductCard = (product) => `
<article class="ph-product-card">
  <div class="ph-product-rank">TOP${product.rank}</div>
  ${
    product.image
      ? `<img class="ph-product-image" src="${escapeAttr(product.image)}" alt="${escapeAttr(product.imageAlt || product.name)}" loading="lazy" decoding="async">`
      : ""
  }
  <div class="ph-product-body">
    <div class="ph-product-kicker">
      <span>${product.featured ? "精选" : "上榜"}</span>
      <span>${product.votes ? `▲ ${product.votes}` : "票数待更新"}</span>
    </div>
    <h2>${escapeHtml(product.name)}</h2>
    ${
      product.tagline
        ? `<p class="ph-product-tagline">${escapeHtml(product.tagline)}</p>`
        : ""
    }
    ${
      product.description
        ? `<p class="ph-product-description">${escapeHtml(product.description)}</p>`
        : ""
    }
    ${renderKeywords(product.keywords)}
    <div class="ph-product-actions">${renderActions(product)}</div>
  </div>
</article>`;

const renderProducts = (products) =>
  products.length
    ? `<section class="ph-products" aria-label="Product Hunt 产品榜单">${products
        .map(renderProductCard)
        .join("\n")}</section>`
    : "<p>暂无可展示的结构化产品数据。</p>";

const renderPage = ({ title, date, routePath, products, styles }) => {
  const url = getCanonicalUrl(routePath);
  const displayDate = date
    ? `<time datetime="${escapeAttr(date)}">${date}</time>`
    : "";

  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)} | DAYHACK</title>
<meta name="description" content="${escapeAttr(title)}">
<meta property="og:url" content="${escapeAttr(url)}">
<meta property="og:title" content="${escapeAttr(`${title} | DAYHACK`)}">
<meta property="og:type" content="article">
<link rel="canonical" href="${escapeAttr(url)}">
<link rel="alternate" type="application/atom+xml" href="${siteHostname}${base}atom.xml" title="DAYHACK">
<link rel="alternate" type="application/feed+json" href="${siteHostname}${base}feed.json" title="DAYHACK">
<link rel="alternate" type="application/rss+xml" href="${siteHostname}${base}rss.xml" title="DAYHACK">
${styles.join("\n")}
<style>
:root { --daily-accent: #da552f; --daily-link: #2563eb; --daily-surface: #fff; --daily-border: rgb(15 23 42 / 10%); }
.ph-archive-page { max-width: 1080px; margin: 0 auto; padding: 5rem 1.5rem 4rem; line-height: 1.75; }
.ph-archive-page header { margin-bottom: 1.5rem; }
.ph-archive-page h1 { margin: 0 0 .75rem; font-size: clamp(2rem, 5vw, 3.25rem); line-height: 1.15; }
.ph-archive-page time { color: var(--vp-c-text-mute, #6b7280); }
.ph-archive-page a { overflow-wrap: anywhere; color: var(--daily-link); }
.ph-archive-nav { display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; }
.ph-products { display: grid; gap: 1rem; }
.ph-product-card { position: relative; display: grid; grid-template-columns: minmax(180px, 30%) minmax(0, 1fr); gap: 1rem; min-height: 176px; padding: 1rem; border: 1px solid var(--daily-border); border-radius: 8px; background: var(--daily-surface); box-shadow: 0 14px 36px rgb(15 23 42 / 8%); }
.ph-product-rank { position: absolute; top: 1rem; left: 1rem; z-index: 1; padding: .25rem .55rem; border-radius: 6px; background: rgb(15 23 42 / 82%); color: #fff; font-size: .78rem; font-weight: 700; }
.ph-product-image { display: block; width: 100%; height: 100%; min-height: 160px; border-radius: 6px; object-fit: cover; background: #f1f5f9; }
.ph-product-body { min-width: 0; }
.ph-product-kicker { display: flex; flex-wrap: wrap; gap: .5rem; color: var(--daily-accent); font-size: .84rem; font-weight: 700; }
.ph-product-card h2 { margin: .25rem 0 .35rem; font-size: clamp(1.25rem, 3vw, 1.7rem); line-height: 1.25; }
.ph-product-tagline { margin: 0 0 .5rem; font-weight: 700; }
.ph-product-description { margin: 0; color: var(--vp-c-text-mute, #475569); }
.ph-product-tags { display: flex; flex-wrap: wrap; gap: .4rem; margin: .75rem 0 0; padding: 0; list-style: none; }
.ph-product-tags li { padding: .14rem .45rem; border: 1px solid var(--daily-border); border-radius: 999px; font-size: .78rem; color: var(--vp-c-text-mute, #475569); }
.ph-product-actions { display: flex; flex-wrap: wrap; gap: .55rem; margin-top: .9rem; }
.ph-product-button { display: inline-flex; align-items: center; min-height: 2.2rem; padding: 0 .8rem; border: 1px solid var(--daily-border); border-radius: 6px; color: var(--daily-link); font-weight: 700; text-decoration: none; }
.ph-product-button-primary { border-color: var(--daily-accent); background: var(--daily-accent); color: #fff !important; }
@media (max-width: 719px) { .ph-archive-page { padding: 4.25rem 1rem 3rem; } .ph-product-card { grid-template-columns: 1fr; padding: .85rem; } .ph-product-image { aspect-ratio: 2 / 1; min-height: 0; } .ph-product-actions { display: grid; grid-template-columns: 1fr 1fr; } .ph-product-button { justify-content: center; padding-inline: .5rem; } }
</style>
</head>
<body>
<main class="ph-archive-page">
<nav class="ph-archive-nav"><a href="${base}">首页</a><a href="${base}blog.html">PH 每日热榜</a></nav>
<header><h1>${escapeHtml(title)}</h1>${displayDate}</header>
${renderProducts(products)}
</main>
</body>
</html>
`;
};

const patchSitemap = async (postUrls) => {
  const sitemapUrl = new URL("sitemap.xml", distDir);
  let sitemap = await readFile(sitemapUrl, "utf8");
  const existing = new Set(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]),
  );
  const additions = postUrls
    .filter((url) => !existing.has(url))
    .map((url) => `\n  <url>\n    <loc>${url}</loc>\n  </url>`)
    .join("");

  if (additions) {
    sitemap = sitemap.replace("</urlset>", `${additions}\n</urlset>`);
    await writeFile(sitemapUrl, sitemap);
  }
};

// This archive pass is intentionally unbounded: every PH markdown file becomes
// a published HTML page, independent of the VuePress route window.
const files = await getPHFiles();
const styles = await getStyles();
const postUrls = [];

await mkdir(distPostsDir, { recursive: true });

for (const file of files) {
  const day = await readPHDay(file);
  const html = renderPage({
    title: day.title,
    date: day.date,
    routePath: day.routePath,
    products: day.products,
    styles,
  });

  postUrls.push(day.url);
  await writeFile(new URL(`${basename(file, ".md")}.html`, distPostsDir), html);
}

await patchSitemap(postUrls);

console.log(
  `Generated ${files.length} PH archive pages in ${distPostsDir.pathname}`,
);
