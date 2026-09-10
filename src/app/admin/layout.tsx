import Link from "next/link";
import { auth } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <div className="admin-shell">
      {session?.user ? (
        <header className="admin-bar">
          <div>
            <strong>Art de Excellence</strong>
            <div className="muted">{session.user.email}</div>
          </div>
          <div className="row-actions">
            <Link className="btn secondary" href="/#blog">
              View site
            </Link>
            <LogoutButton />
          </div>
        </header>
      ) : null}
      {children}
    </div>
  );
}
