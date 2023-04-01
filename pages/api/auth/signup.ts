import { connectToDatabase } from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { SignupResponse } from "@/models/oauth/signup";
import { encryptPassword } from "@/lib/auth";
import sendemail from "@/pages/api/auth/sendemail";
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignupResponse>
) {
  
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { email, password } = data;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid Input" });
    return;
  }
 
  
  const client = await connectToDatabase();
  const db = client.db();
  const existingUser = await db.collection("users").findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: "User already exist" });
    client.close();
    return;
  }

  const hashPassword = await encryptPassword(password);
  const result = await db.collection("users").insertOne({
    email: email,
    password: hashPassword,
  });
  console.log(result);
  res.status(201).json({ message: "Created User" });
  client.close();
  sendemail(email);
}
export default handler;