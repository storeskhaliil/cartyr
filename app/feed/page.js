"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { createProfile } from "@/lib/createProfile";

export default function Feed() {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      createProfile(user);
    }
  }, [user]);

  return <div>Feed</div>;
}
