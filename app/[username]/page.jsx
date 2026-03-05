import { supabase } from "@/lib/supabase";

export default async function ProfilePage({ params }) {
  const { username } = params;

  // Fetch user
  const { data: user } = await supabase.from("users").select("*").eq("username", username).single();
  if (!user) return <p>User not found</p>;

  // Fetch posts
  const { data: posts } = await supabase
    .from("posts")
    .select(`id, caption, post_images(image_url, position)`)
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{user.username}</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-2 rounded">
            <p>{post.caption}</p>
            <div className="flex gap-2 overflow-x-auto mt-2">
              {post.post_images?.map((img) => (
                <img key={img.position} src={img.image_url} className="h-32 object-cover" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
