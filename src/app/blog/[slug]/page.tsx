import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";
import { formatDate, renderArticleHtml } from "@/lib/html";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post ? `${post.title} | Art De Excellence` : "Article | Art De Excellence",
    description: post?.excerpt,
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="article-page">
      <nav className="article-nav">
        <Link href="/#blog" className="logo">
          Art <span style={{ color: "var(--gold)" }}>de</span> Excellence
        </Link>
        <Link href="/#blog">Back to journal</Link>
      </nav>
      <header className="article-hero">
        <div className="category">{post.category}</div>
        <h1>{post.title}</h1>
        <p className="meta">{formatDate(post.createdAt)}</p>
        {post.imageUrl ? <img className="article-cover" src={post.imageUrl} alt={post.title} /> : null}
      </header>
      <div className="article-body" dangerouslySetInnerHTML={{ __html: renderArticleHtml(post.content) }} />
    </article>
  );
}
