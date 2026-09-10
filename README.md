# Art De Excellence

Haute joaillerie OEM/ODM website with an admin desk for publishing live journal articles.

## Local development

1. Copy `.env.example` to `.env`.
2. Create a PostgreSQL database ([Neon](https://neon.tech) is the simplest option for Vercel).
3. Put the connection string in `DATABASE_URL`.
4. Set `AUTH_SECRET` to a long random string and choose `ADMIN_EMAIL` / `ADMIN_PASSWORD`.

```bash
npm install
npx prisma db push
npm run db:seed
npm run dev
```

- Public site: [http://localhost:3000](http://localhost:3000)
- Admin login: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

Published articles appear on the **Blog** tab and at `/blog/your-slug`.

## Deploy on Vercel

1. Import the GitHub repository. Vercel should detect **Next.js**.
2. Add environment variables: `DATABASE_URL`, `AUTH_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`.
3. Deploy, then run seed once from your machine against the same database:

```bash
npx prisma db push
npm run db:seed
```

No build command override is required. The project already runs `prisma generate` during install and build.

## Pages

- `/` — main atelier site (blogs load from Postgres)
- `/all-services` — detailed OEM service guide
- `/blog/[slug]` — article
- `/admin` — protected journal desk
