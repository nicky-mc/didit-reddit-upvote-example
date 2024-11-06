import { signIn } from "@/auth";

export function LoginButton() {
  async function handleLogin(event) {
    event.preventDefault();
    await signIn("github");
  }

  return (
    <form onSubmit={handleLogin} className="inline">
      <button type="submit" className="bg-pink-300 text-black px-3 py-2 rounded">
        Login
      </button>
    </form>
  );
}
