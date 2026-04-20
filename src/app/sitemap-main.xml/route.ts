import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://ditelaga.digital";
  const now = new Date().toISOString();

  const urls = [
    baseUrl,
    `${baseUrl}/about`,
    `${baseUrl}/clients`,
    `${baseUrl}/portfolio`,
    `${baseUrl}/contact`,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${now}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${url === baseUrl ? "1.0" : "0.7"}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}