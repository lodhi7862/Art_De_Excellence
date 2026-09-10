import { readFile } from "fs/promises";
import path from "path";
import { getPublishedPosts, type PublicPost } from "./posts";
import { escapeHtml, formatDate } from "./html";

function cardHtml(post: PublicPost): string {
  const src = escapeHtml(post.imageUrl || "/Images/gallery/31330211169e.jpg");
  return `
        <a class="product-card" href="/blog/${escapeHtml(post.slug)}" style="color:inherit;">
          <div class="product-img-box" style="height:280px;">
            <img src="${src}" alt="${escapeHtml(post.title)}" loading="lazy">
          </div>
          <div class="card-body">
            <span class="category">${escapeHtml(post.category)}</span>
            <h3>${escapeHtml(post.title)}</h3>
            <p>${escapeHtml(post.excerpt)}</p>
            <span style="color:var(--gold); font-weight:600; margin-top:auto;">Read article <i class="fa-solid fa-chevron-right" style="font-size:0.8rem;"></i></span>
          </div>
        </a>`;
}

export function renderBlogFeed(posts: PublicPost[]): string {
  if (!posts.length) {
    return `<p class="search-empty visible">Journal entries will appear here once published from the atelier desk.</p>`;
  }

  const featured = posts.find((post) => post.featured) ?? posts[0];
  const rest = posts.filter((post) => post.id !== featured.id);
  const featuredSrc = escapeHtml(featured.imageUrl || "/Images/gallery/31330211169e.jpg");

  const featuredHtml = `
      <div style="background:var(--bg-card); border:1px solid var(--border); border-radius:8px; padding:4rem; margin-bottom:5rem; box-shadow:var(--shadow);">
        <div class="grid-2" style="align-items:center;">
          <div>
            <span class="hero-tag" style="margin-bottom:0.8rem;">Editor's Pick • ${escapeHtml(formatDate(featured.createdAt))}</span>
            <h3 style="font-size:2.2rem; margin-bottom:1.2rem;">${escapeHtml(featured.title)}</h3>
            <p style="color:var(--text-muted); font-size:1.05rem; margin-bottom:2rem;">${escapeHtml(featured.excerpt)}</p>
            <a href="/blog/${escapeHtml(featured.slug)}" class="btn btn-primary">Read Full Case Study <i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div style="border-radius:8px; overflow:hidden; height:350px;">
            <img src="${featuredSrc}" alt="${escapeHtml(featured.title)}" style="width:100%; height:100%; object-fit:cover;" loading="lazy">
          </div>
        </div>
      </div>`;

  const grid = rest.length
    ? `<div class="grid-3" style="margin-bottom: 5rem;">${rest.map(cardHtml).join("")}</div>`
    : "";

  return `${featuredHtml}\n${grid}`;
}

export async function renderHomeHtml(): Promise<string> {
  const template = await readFile(path.join(process.cwd(), "content/site-template.html"), "utf8");
  const posts = await getPublishedPosts();
  return template.replace("<!--BLOG_FEED-->", renderBlogFeed(posts));
}
