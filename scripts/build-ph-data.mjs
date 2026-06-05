import { mkdir, writeFile } from "node:fs/promises";

import { readAllPHDays } from "./ph-data.mjs";

const publicDir = new URL("../docs/.vuepress/public/", import.meta.url);
const outputUrl = new URL("ph-daily-index.json", publicDir);

const compactProduct = (product) => ({
  rank: product.rank,
  name: product.name,
  tagline: product.tagline,
  image: product.image,
  websiteUrl: product.websiteUrl,
  productHuntUrl: product.productHuntUrl,
  keywords: product.keywords.slice(0, 6),
  votes: product.votes,
  featured: product.featured,
});

const days = await readAllPHDays();
const payload = {
  totalDays: days.length,
  latestDate: days[0]?.date ?? "",
  oldestDate: days.at(-1)?.date ?? "",
  days: days.map((day) => ({
    title: day.title,
    date: day.date,
    routePath: day.routePath,
    url: day.url,
    productCount: day.productCount,
    topProduct: day.topProduct ? compactProduct(day.topProduct) : null,
    topProducts: day.products.slice(0, 3).map(compactProduct),
  })),
};

await mkdir(publicDir, { recursive: true });
await writeFile(outputUrl, `${JSON.stringify(payload)}\n`);

console.log(`Generated PH daily index for ${days.length} days`);
