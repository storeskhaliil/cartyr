import { supabase } from "@/lib/supabase";

export default async function Profile({ params }) {
  const { username } = params;

  // Fetch profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", username)
    .single();

  if (!profile) return <div>User not found</div>;

  // Fetch posts
  const { data: posts } = await supabase
    .from("posts")
    .select(`
      *,
      post_images(*)
    `)
    .eq("user_id", profile.id)
    .order("created_at", { ascending: false });

  return (
    <div className="p-4">
      <div className="flex items-center gap-4">
        <img
          src={profile.avatar_url || "/default-avatar.png"}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h1 className="text-xl font-bold">{profile.username}</h1>
          <p>{profile.bio}</p>
        </div>
      </div>

      <hr className="my-4" />

      <div className="grid grid-cols-3 gap-2">
        {posts?.map((post) =>
          post.post_images.map((img) => (
            <img key={img.id} src={img.image_url} className="w-full h-32 object-cover" />
          ))
        )}
      </div>
    </div>
  );
}
