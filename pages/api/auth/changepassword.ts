import { getServerSession } from "next-auth/next";
import { verifyPassword, encryptPassword } from "@/lib/auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectToDatabase } from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { SignupResponse } from "@/models/oauth/signup";

async function handler(req:NextApiRequest, res:NextApiResponse<SignupResponse>) {
    if (req.method !== "PATCH") {
      return;
    }
    console.log("Change Password");
    const session = await getServerSession(req, res, authOptions);
    console.log(session);
    if (!session) {
      res.status(401).json({ message: "Unauthorized login" });
      return;
    }
  
    const userEmail = session.user!.email;
    const oldpassword = req.body.oldpassword;
    const newpassword = req.body.newpassword;
  
    console.log(oldpassword);
    console.log(newpassword);
  
    const client = await connectToDatabase();
    const db = client.db();
    const user = await db.collection("users").findOne({ email: userEmail });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      client.close();
      return;
    }
  
    const currentPassword = user.password;
    var isValid = await verifyPassword(oldpassword, currentPassword);
    console.log(isValid);
    if (!isValid) {
      res.status(403).json({ message: "You are not authorized" });
      client.close();
      return;
    }
  
    const hashPassword = await encryptPassword(newpassword);
    const result = await db
      .collection("users")
      .updateOne({ email: userEmail }, { $set: { password: hashPassword } });
    console.log(result);
    res.status(200).json({ message: "Credentials updated successfully" });
    client.close();
  }
  export default handler;