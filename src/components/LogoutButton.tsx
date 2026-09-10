import { logoutAction } from "@/lib/actions";

export default function LogoutButton() {
  return (
    <form action={logoutAction}>
      <button className="btn secondary" type="submit">
        Log out
      </button>
    </form>
  );
}
