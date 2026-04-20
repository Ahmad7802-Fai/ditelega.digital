export async function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: https://ditelaga.digital/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}