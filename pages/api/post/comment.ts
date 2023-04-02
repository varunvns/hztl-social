import { connectToDatabase } from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { SaveCommentResponseModel } from "@/models/post/comment";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SaveCommentResponseModel>
) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const { commentreceiverid, commentauthorid, comment } = data;
  if (
    (!Number.isInteger(commentreceiverid) && commentreceiverid < 0) ||
    (!Number.isInteger(commentauthorid) && commentauthorid < 0) ||
    !comment
  ) {
    res.status(422).json({ message: "Invalid Input" });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();
  //Make dynamic

  const existingUser = await db
    .collection("employees")
    .findOne({ id: commentauthorid });
  if (!existingUser) {
    res.status(422).json({ message: "User does not exist" });
    client.close();
    return;
  }
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
