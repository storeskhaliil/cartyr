"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { createProfile } from "@/lib/createProfile";

export default function Feed() {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      createProfile(user).then(() => setLoading(false));
    }
  }, [user]);

  if (!user) return <div>Please sign in to see the feed</div>;
  if (loading) return <div>Loading your profile...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Welcome {user.firstName}</h1>
      <p>Your profile row in Supabase is now ready ✅</p>
    </div>
  );
}
