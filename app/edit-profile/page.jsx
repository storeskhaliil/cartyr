"use client";

import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function EditProfile() {
  const { user } = useUser();
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (!user) return;
    async function fetchProfile() {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      if (data) {
        setBio(data.bio || "");
      }
    }
    fetchProfile();
  }, [user]);

  async function uploadAvatar() {
    if (!avatar) return null;
    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(`${user.id}/${Date.now()}_${avatar.name}`, avatar);
    if (error) return null;
    const url = supabase.storage.from("avatars").getPublicUrl(data.path).data.publicUrl;
    return url;
  }

  async function handleSave() {
    const avatar_url = await uploadAvatar();

    await supabase.from("profiles").update({
      bio,
      avatar_url: avatar_url || undefined
    }).eq("id", user.id);

    alert("Profile updated!");
  }

  return (
    <div className="p-4 flex flex-col gap-4 max-w-md">
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Your bio..."
        className="border p-2 rounded"
      />
      <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      <button onClick={handleSave} className="bg-purple-600 text-white p-2 rounded">
        Save
      </button>
    </div>
  );
}
