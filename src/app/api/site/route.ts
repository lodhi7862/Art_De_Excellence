import { renderHomeHtml } from "@/lib/render-home";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const html = await renderHomeHtml();
    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Failed to render homepage", error);
    return new Response("The atelier site is temporarily unavailable.", {
      status: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}
