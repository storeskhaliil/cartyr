import { supabase } from "./supabase";

// Automatically create a profile for a new Clerk user
export async function createProfile(user) {
  if (!user) return;

  // Check if profile already exists
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error && error.code !== "PGRST116") { // ignore "no rows found"
    console.error("Error checking profile:", error);
    return;
  }

  if (!data) {
    // Create new profile row
    const usernameBase = user.username || user.firstName?.toLowerCase() || "user";
    const username = usernameBase + Math.floor(Math.random() * 1000); // temporary unique

    const { error: insertError } = await supabase.from("profiles").insert({
      id: user.id,           // Clerk user ID
      username,              // auto-generated username
      name: user.firstName || "",
      avatar_url: user.imageUrl || "",
      bio: "",
    });

    if (insertError) {
      console.error("Error creating profile:", insertError);
    }
  }
}
