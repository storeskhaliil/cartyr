// app/[username]/page.jsx
import { supabase } from "@/lib/supabase";

export default async function ProfilePage({ params }) {
  const username = params.username;

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", username)
    .single();

  if (!profile) return <div>User not found…</div>;

  return (
    <div>
      <h1>{profile.name || username}</h1>
      <p>{profile.bio}</p>
    </div>
  );
}
