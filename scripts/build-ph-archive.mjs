import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { basename } from "node:path";

const siteHostname = "https://github.camscanner.top";
const base = "/daily/";
const postsDir = new URL("../docs/_posts/", import.meta.url);
const distDir = new URL("../docs/.vuepress/dist/", import.meta.url);
const distPostsDir = new URL("../docs/.vuepress/dist/posts/", import.meta.url);

const parseFrontmatter = (source) => {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) return { frontmatter: {}, content: source };

  const frontmatter = {};

  for (const line of match[1].split("\n")) {
    const item = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);

    if (item) frontmatter[item[1]] = item[2].replace(/^["']|["']$/g, "");
  }

  return { frontmatter, content: match[2] };
};

const escapeHtml = (value) =>
  value
    .replace(/&(?!(?:[a-z]+|#[0-9]+|#x[0-9a-f]+);)/gi, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const escapeAttr = (value) => escapeHtml(value).replace(/"/g, "&quot;");

const renderInline = (value) => {
  const htmlSlots = [];
  const protectHtml = (html) => {
    const index = htmlSlots.push(html) - 1;

    return `\u0000HTML_${index}\u0000`;
  };

  let output = value.replace(/<br\s*\/?>/gi, (html) => protectHtml(html));

  output = escapeHtml(output)
    .replace(
      /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g,
      (_, alt, src) =>
        `<img src="${escapeAttr(src)}" alt="${escapeAttr(
          alt,
        )}" loading="lazy" decoding="async">`,
    )
    .replace(
      /\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g,
      (_, text, href) =>
        `<a href="${escapeAttr(
          href,
        )}" target="_blank" rel="noopener noreferrer">${text}</a>`,
    )
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

  return output.replace(
    /\u0000HTML_(\d+)\u0000/g,
    (_, index) => htmlSlots[index],
  );
};

const slugify = (value) =>
  value
    .replace(/<[^>]+>/g, "")
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

const renderMarkdown = (source) => {
  const blocks = [];

  for (const rawLine of source.split("\n")) {
    const line = rawLine.trim();

    if (!line) continue;
    if (line === "---") {
      blocks.push("<hr>");
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);

    if (heading) {
      const level = heading[1].length;
      const content = renderInline(heading[2]);
      const id = slugify(content);

      blocks.push(
        `<h${level}${id ? ` id="${escapeAttr(id)}"` : ""}>${content}</h${level}>`,
      );
      continue;
    }

    blocks.push(`<p>${renderInline(line)}</p>`);
  }

  return blocks.join("\n");
};

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

const renderPage = ({ title, date, routePath, body, styles }) => {
  const url = new URL(`${base.replace(/\/$/, "")}${routePath}`, siteHostname)
    .href;
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
.ph-archive-page { max-width: 920px; margin: 0 auto; padding: 5rem 1.5rem 4rem; line-height: 1.75; }
.ph-archive-page header { margin-bottom: 2rem; }
.ph-archive-page h1 { margin: 0 0 .75rem; font-size: clamp(2rem, 5vw, 3.25rem); line-height: 1.15; }
.ph-archive-page time { color: var(--vp-c-text-mute, #6b7280); }
.ph-archive-page h2 { margin-top: 2.5rem; padding-top: 1rem; border-top: 1px solid var(--vp-c-border, #e5e7eb); }
.ph-archive-page img { display: block; width: min(100%, 720px); height: auto; margin: .75rem 0; border-radius: 8px; }
.ph-archive-page a { overflow-wrap: anywhere; }
.ph-archive-nav { display: flex; gap: 1rem; margin-bottom: 2rem; }
</style>
</head>
<body>
<main class="ph-archive-page">
<nav class="ph-archive-nav"><a href="${base}">首页</a><a href="${base}blog.html">PH 每日热榜</a></nav>
<header><h1>${escapeHtml(title)}</h1>${displayDate}</header>
${body}
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

const files = (await readdir(postsDir))
  .filter((file) => /^PH-daily-\d{4}-\d{2}-\d{2}\.md$/.test(file))
  .sort();
const styles = await getStyles();
const postUrls = [];

await mkdir(distPostsDir, { recursive: true });

for (const file of files) {
  const source = await readFile(new URL(file, postsDir), "utf8");
  const { frontmatter, content } = parseFrontmatter(source);
  const title = frontmatter.title || basename(file, ".md");
  const routePath = `/posts/${basename(file, ".md")}.html`;
  const body = renderMarkdown(content);
  const html = renderPage({
    title,
    date: frontmatter.date,
    routePath,
    body,
    styles,
  });
  const url = new URL(`${base.replace(/\/$/, "")}${routePath}`, siteHostname)
    .href;

  postUrls.push(url);
  await writeFile(new URL(`${basename(file, ".md")}.html`, distPostsDir), html);
}

await patchSitemap(postUrls);

console.log(
  `Generated ${files.length} PH archive pages in ${distPostsDir.pathname}`,
);
