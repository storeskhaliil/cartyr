import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, password } = req.body;
  const { data: user } = await supabase.from("users").select("*").eq("username", username).single();

  if (!user) return res.json({ success: false, message: "User not found" });

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) return res.json({ success: false, message: "Wrong password" });

  // For now, we just return success; later you can set a session or JWT
  res.json({ success: true, user_id: user.id });
}