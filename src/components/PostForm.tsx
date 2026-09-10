"use client";

import { useState } from "react";
import { GALLERY_IMAGES, POST_CATEGORIES } from "@/lib/gallery";
import { slugify } from "@/lib/html";

type PostValues = {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  featured: boolean;
  published: boolean;
};

export default function PostForm({
  action,
  post,
  submitLabel,
}: {
  action: (formData: FormData) => void | Promise<void>;
  post?: PostValues;
  submitLabel: string;
}) {
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [imageUrl, setImageUrl] = useState(post?.imageUrl ?? GALLERY_IMAGES[0]);
  const [slugTouched, setSlugTouched] = useState(Boolean(post?.slug));

  return (
    <form className="post-form" action={action}>
      {post?.id ? <input type="hidden" name="id" value={post.id} /> : null}

      <div className="field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={title}
          required
          onChange={(event) => {
            setTitle(event.target.value);
            if (!slugTouched) setSlug(slugify(event.target.value));
          }}
        />
      </div>

      <div className="grid-2">
        <div className="field">
          <label htmlFor="slug">URL slug</label>
          <input
            id="slug"
            name="slug"
            value={slug}
            required
            onChange={(event) => {
              setSlugTouched(true);
              setSlug(event.target.value);
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" defaultValue={post?.category ?? "Atelier Notes"}>
            {POST_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="excerpt">Excerpt</label>
        <textarea id="excerpt" name="excerpt" required defaultValue={post?.excerpt} style={{ minHeight: 90 }} />
      </div>

      <div className="field">
        <label htmlFor="content">Article</label>
        <textarea id="content" name="content" required defaultValue={post?.content} style={{ minHeight: 280 }} />
      </div>

      <div className="field">
        <label htmlFor="imageUrl">Cover image URL</label>
        <input
          id="imageUrl"
          name="imageUrl"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          placeholder="/Images/gallery/... or https://"
        />
      </div>

      <div className="thumb-grid" aria-label="Choose a studio image">
        {GALLERY_IMAGES.map((src) => (
          <button
            type="button"
            key={src}
            className={src === imageUrl ? "selected" : ""}
            onClick={() => setImageUrl(src)}
          >
            <img src={src} alt="" />
          </button>
        ))}
      </div>

      <div className="check-row">
        <label>
          <input type="checkbox" name="published" defaultChecked={post?.published ?? true} />
          Published on website
        </label>
        <label>
          <input type="checkbox" name="featured" defaultChecked={post?.featured ?? false} />
          Editor&apos;s pick
        </label>
      </div>

      <button className="btn" type="submit">
        {submitLabel}
      </button>
    </form>
  );
}
