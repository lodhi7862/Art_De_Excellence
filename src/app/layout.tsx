import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Art De Excellence | Haute Joaillerie OEM/ODM Studio",
  description:
    "Art De Excellence is a haute joaillerie OEM/ODM atelier specializing in CAD engineering, vacuum casting, and micro-pave setting for luxury jewelry brands.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
