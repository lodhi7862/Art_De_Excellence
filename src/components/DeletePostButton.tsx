"use client";

import { deletePostAction } from "@/lib/actions";

export default function DeletePostButton({ id }: { id: string }) {
  return (
    <form
      action={deletePostAction}
      onSubmit={(event) => {
        if (!confirm("Delete this article permanently?")) event.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button className="btn danger" type="submit">
        Delete
      </button>
    </form>
  );
}
