import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { FALLBACK_POSTS } from "../src/lib/posts";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL?.toLowerCase().trim();
  const password = process.env.ADMIN_PASSWORD;
  if (email && password) {
    const passwordHash = await bcrypt.hash(password, 12);
    await prisma.adminUser.upsert({
      where: { email },
      update: { passwordHash, name: "Studio Admin" },
      create: { email, passwordHash, name: "Studio Admin" },
    });
    console.log(`Admin ready: ${email}`);
  } else {
    console.warn("Skipping admin seed. Set ADMIN_EMAIL and ADMIN_PASSWORD.");
  }

  for (const post of FALLBACK_POSTS) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        imageUrl: post.imageUrl,
        featured: post.featured,
        published: post.published,
      },
      create: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        imageUrl: post.imageUrl,
        featured: post.featured,
        published: post.published,
        createdAt: post.createdAt,
      },
    });
  }
  console.log(`Seeded ${FALLBACK_POSTS.length} journal articles.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
