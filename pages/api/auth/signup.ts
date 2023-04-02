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
  const { email, password,fullname } = data;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid Input" });
    return;
  }
  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(422).json({ message: "Failed to connect to database" });
    return;
  }
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
    fullname: fullname
  });
  console.log(result);
  res.status(201).json({ message: "User Created Successfully" });
  client.close();
  sendemail(email);
}
export default handler;
