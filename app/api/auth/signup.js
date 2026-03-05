import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, password } = req.body;
  if (!username || !password) return res.json({ success: false, message: "Missing fields" });

  // Check if user exists
  const { data: existing } = await supabase.from("users").select("*").eq("username", username);
  if (existing.length > 0) return res.json({ success: false, message: "Username taken" });

  // Hash password
  const password_hash = await bcrypt.hash(password, 10);

  const { data, error } = await supabase.from("users").insert([{ username, password_hash }]);
  if (error) return res.json({ success: false, message: error.message });

  res.json({ success: true });
}