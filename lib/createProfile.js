import { supabase } from "./supabase";

export async function createProfile(user) {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!data) {
    await supabase.from("profiles").insert({
      id: user.id,
      username: user.firstName.toLowerCase() + Math.floor(Math.random() * 1000), // temporary unique username
      name: user.firstName || "",
      avatar_url: user.imageUrl
    });
  }
}
