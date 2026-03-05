import { supabase } from "@/lib/supabase";

export default async function Profile({ params }) {
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("username", params.username)
    .single();

  return (
    <div>
      <img src={profile.avatar_url} width="120" />
      <h1>{profile.username}</h1>
      <p>{profile.bio}</p>
    </div>
  );
}
