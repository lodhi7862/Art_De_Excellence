import { renderHomeHtml } from "@/lib/render-home";

export const dynamic = "force-dynamic";

export async function GET() {
  const html = await renderHomeHtml();
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
