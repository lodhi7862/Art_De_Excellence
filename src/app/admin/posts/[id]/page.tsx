import Link from "next/link";
import { notFound } from "next/navigation";
import PostForm from "@/components/PostForm";
import { getAdminPost } from "@/lib/posts";
import { updatePostAction } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getAdminPost(id);
  if (!post) notFound();

  return (
    <main className="admin-wrap">
      <p>
        <Link href="/admin">← Journal desk</Link>
      </p>
      <div className="admin-hero">
        <div>
          <h1>Edit article</h1>
          <p>Changes to a published article show on the live website immediately.</p>
        </div>
      </div>
      <PostForm action={updatePostAction} submitLabel="Save changes" post={post} />
    </main>
  );
}
