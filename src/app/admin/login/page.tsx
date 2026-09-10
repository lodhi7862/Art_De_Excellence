import LoginForm from "@/components/LoginForm";

export const metadata = { title: "Admin login | Art De Excellence" };

export default function AdminLoginPage() {
  return (
    <main className="login-page">
      <div className="login-card">
        <div className="eyebrow">Private atelier desk</div>
        <h1>Admin login</h1>
        <p>Sign in to publish journal articles that appear immediately on the live website.</p>
        <LoginForm />
      </div>
    </main>
  );
}
