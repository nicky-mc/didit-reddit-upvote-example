import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/LogoutButton";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
    return null;
  }

  async function savePost(formData) {
    "use server";
    const content = formData.get("content");
    const title = formData.get("title");
    const userId = session?.user?.id;

    if (!userId) {
      throw new Error("You need to login");
    }

    await db.query(
      "INSERT INTO posts (title, body, user_id) VALUES ($1, $2, $3)",
      [title, content, userId]
    );

    revalidatePath("/");
    redirect("/");
  }

  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-base-200 mt-10 rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-primary">Add a New Post</h2>
      <form action={savePost} className="flex flex-col space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Post title..."
          className="input input-bordered w-full"
        />
        <textarea
          name="content"
          className="textarea textarea-bordered w-full"
          placeholder="Post content..."
        />
        <button className="btn btn-success text-lg">Submit Post</button>
      </form>
      <div className="mt-6">
        <LogoutButton />
      </div>
    </div>
  );
}
