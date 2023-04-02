import { connectToDatabase } from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { SaveCommentResponseModel } from "@/models/post/comment";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SaveCommentResponseModel>
) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    res.status(401).json({ message: "Unauthorized login" });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const userEmail = session.user!.email;
  const loggedInUser = await db
    .collection("users")
    .findOne({ email: userEmail });
  let commentauthorid;
  if (loggedInUser) {
    commentauthorid = loggedInUser._id.toString();
  }

  const { commentreceiverid, comment } = data;
  console.log(commentauthorid);
  console.log(commentreceiverid);
  console.log(comment);

  const result = await db.collection("comments").insertOne({
    commentreceiverid: commentreceiverid,
    commentauthorid: commentauthorid,
    DateTime: Date.now(),
    comment: comment,
  });
  console.log(result);
  res.status(201).json({ message: "" });
  client.close();
}

export default handler;
