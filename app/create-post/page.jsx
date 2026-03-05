"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function CreatePost() {
  const { user } = useUser();
  const [caption, setCaption] = useState("");
  const [images, setImages] = useState([]);

  async function uploadImages() {
    const urls = [];
    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      const { data, error } = await supabase.storage
        .from("posts")
        .upload(`${user.id}/${Date.now()}_${file.name}`, file);

      if (error) {
        console.error(error);
      } else {
        const publicUrl = supabase.storage
          .from("posts")
          .getPublicUrl(data.path).data.publicUrl;
        urls.push(publicUrl);
      }
    }
    return urls;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!user) return;

    const imageUrls = await uploadImages();

    // Insert into posts table
    const { data: post, error } = await supabase
      .from("posts")
      .insert({ user_id: user.id, caption })
      .select()
      .single();

    if (error) {
      console.error(error);
      return;
    }

    // Insert images
    for (let url of imageUrls) {
      await supabase.from("post_images").insert({
        post_id: post.id,
        image_url: url,
      });
    }

    setCaption("");
    setImages([]);
    alert("Post created!");
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="file"
        multiple
        onChange={(e) => setImages(e.target.files)}
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Post
      </button>
    </form>
  );
}
