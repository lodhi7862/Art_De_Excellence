"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { auth, signIn, signOut } from "./auth";
import { prisma } from "./prisma";
import { slugify } from "./html";

async function requireAdmin() {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  return session;
}

async function uniqueSlug(base: string, ignoreId?: string) {
  let slug = slugify(base);
  let n = 2;
  while (true) {
    const existing = await prisma.post.findUnique({ where: { slug } });
    if (!existing || existing.id === ignoreId) return slug;
    slug = `${slugify(base)}-${n}`;
    n += 1;
  }
}

function readPostFields(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const category = String(formData.get("category") ?? "Atelier Notes").trim();
  const imageUrl = String(formData.get("imageUrl") ?? "").trim();
  const featured = formData.get("featured") === "on";
  const published = formData.get("published") === "on";
  const requestedSlug = String(formData.get("slug") ?? "").trim();
  return { title, excerpt, content, category, imageUrl, featured, published, requestedSlug };
}

export async function loginAction(_prev: { error?: string } | undefined, formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/admin",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Invalid email or password." };
    }
    throw error;
  }
}

export async function logoutAction() {
  await signOut({ redirectTo: "/admin/login" });
}

export async function createPostAction(formData: FormData) {
  await requireAdmin();
  const fields = readPostFields(formData);
  if (!fields.title || !fields.excerpt || !fields.content) {
    throw new Error("Title, excerpt, and content are required.");
  }
  const slug = await uniqueSlug(fields.requestedSlug || fields.title);
  if (fields.featured) {
    await prisma.post.updateMany({ data: { featured: false } });
  }
  await prisma.post.create({
    data: {
      title: fields.title,
      slug,
      excerpt: fields.excerpt,
      content: fields.content,
      category: fields.category || "Atelier Notes",
      imageUrl: fields.imageUrl,
      featured: fields.featured,
      published: fields.published,
    },
  });
  revalidatePath("/");
  revalidatePath("/api/site");
  revalidatePath("/admin");
  revalidatePath(`/blog/${slug}`);
  redirect("/admin");
}

export async function updatePostAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  const fields = readPostFields(formData);
  if (!id || !fields.title || !fields.excerpt || !fields.content) {
    throw new Error("Title, excerpt, and content are required.");
  }
  const slug = await uniqueSlug(fields.requestedSlug || fields.title, id);
  if (fields.featured) {
    await prisma.post.updateMany({
      where: { NOT: { id } },
      data: { featured: false },
    });
  }
  await prisma.post.update({
    where: { id },
    data: {
      title: fields.title,
      slug,
      excerpt: fields.excerpt,
      content: fields.content,
      category: fields.category || "Atelier Notes",
      imageUrl: fields.imageUrl,
      featured: fields.featured,
      published: fields.published,
    },
  });
  revalidatePath("/");
  revalidatePath("/api/site");
  revalidatePath("/admin");
  revalidatePath(`/blog/${slug}`);
  redirect("/admin");
}

export async function deletePostAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (!id) return;
  const post = await prisma.post.delete({ where: { id } });
  revalidatePath("/");
  revalidatePath("/api/site");
  revalidatePath("/admin");
  revalidatePath(`/blog/${post.slug}`);
  redirect("/admin");
}
