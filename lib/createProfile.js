import { supabase } from "./supabase";

export async function createProfile(user) {
  if (!user) return;

  // Check if profile already exists
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!data) {
    await supabase.from("profiles").insert({
      id: user.id,           // Clerk user ID
      username: user.username || "user", // use Clerk username
      name: user.firstName || "",
      avatar_url: user.imageUrl || "",
      bio: "",
    });
  }
}
