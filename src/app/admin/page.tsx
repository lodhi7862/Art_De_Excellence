import Link from "next/link";
import { getAllAdminPosts } from "@/lib/posts";
import { formatDate } from "@/lib/html";
import DeletePostButton from "@/components/DeletePostButton";

export const dynamic = "force-dynamic";
export const metadata = { title: "Journal desk | Art De Excellence" };

export default async function AdminDashboardPage() {
  const posts = await getAllAdminPosts();

  return (
    <main className="admin-wrap">
      <div className="admin-hero">
        <div>
          <h1>Craft journal</h1>
          <p>New published articles appear on the live Blog tab right away.</p>
        </div>
        <Link className="btn" href="/admin/posts/new">
          Add article
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="empty">
          {process.env.DATABASE_URL
            ? "No articles yet. Create the first journal entry."
            : "Connect Postgres first: set DATABASE_URL, run prisma db push, then npm run db:seed."}
        </p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Updated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>
                  <strong>{post.title}</strong>
                  <div className="muted">
                    {post.category} · /blog/{post.slug}
                  </div>
                </td>
                <td>
                  <span className="badge">{post.published ? "Live" : "Draft"}</span>
                  {post.featured ? <span className="badge">Featured</span> : null}
                </td>
                <td className="muted">{formatDate(post.updatedAt)}</td>
                <td>
                  <div className="row-actions">
                    <Link className="btn secondary" href={`/admin/posts/${post.id}`}>
                      Edit
                    </Link>
                    <Link className="btn secondary" href={`/blog/${post.slug}`}>
                      Open
                    </Link>
                    <DeletePostButton id={post.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
