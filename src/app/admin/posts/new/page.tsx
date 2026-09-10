import Link from "next/link";
import PostForm from "@/components/PostForm";
import { createPostAction } from "@/lib/actions";

export const metadata = { title: "New article | Art De Excellence" };

export default function NewPostPage() {
  return (
    <main className="admin-wrap">
      <p>
        <Link href="/admin">← Journal desk</Link>
      </p>
      <div className="admin-hero">
        <div>
          <h1>New article</h1>
          <p>Published posts are injected into the public Blog tab on the next page load.</p>
        </div>
      </div>
      <PostForm action={createPostAction} submitLabel="Publish article" />
    </main>
  );
}
