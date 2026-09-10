"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);

    const form = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      email: String(form.get("email") ?? ""),
      password: String(form.get("password") ?? ""),
      redirect: false,
      callbackUrl: "/admin",
    });

    setPending(false);

    if (!result) {
      setError("Could not reach the login service. Try again.");
      return;
    }

    if (result.error) {
      setError(
        result.error === "Configuration"
          ? "Login is not configured on the server. Check DATABASE_URL and AUTH_SECRET in Vercel."
          : "Invalid email or password.",
      );
      return;
    }

    window.location.assign(result.url || "/admin");
  }

  return (
    <form onSubmit={onSubmit}>
      {error ? <p className="error">{error}</p> : null}
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="username" required />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required />
      </div>
      <button className="btn" type="submit" disabled={pending}>
        {pending ? "Signing in..." : "Enter atelier desk"}
      </button>
    </form>
  );
}
