export async function createProfile(user) {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (!data) {
    await supabase.from("profiles").insert({
      id: user.id,
      username: user.username || "",
      name: user.firstName || "",
      avatar_url: user.imageUrl
    });
  }
}
