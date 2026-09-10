import Link from "next/link";

export default function NotFound() {
  return (
    <main className="login-page">
      <div className="login-card">
        <div className="eyebrow">404</div>
        <h1>Page not found</h1>
        <p>That atelier path does not exist.</p>
        <Link className="btn" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
