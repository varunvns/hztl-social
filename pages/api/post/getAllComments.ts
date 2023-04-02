import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";
import { ObjectId } from 'mongodb';
import {
  UserCommentList,
  UserCommentListObject,
} from "@/models/post/usercomment";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return;
  }
  var result = new UserCommentListObject([]);

  const userEmail = req.body.email;
  const client = await connectToDatabase();
  const db = client.db();

  const commentCollection = db.collection("comments");
  const loggedInUser = await db
    .collection("users")
    .findOne({ email: userEmail });
  let commentauthorid;
  if (loggedInUser) {
    commentauthorid = loggedInUser._id.toString();
  }
  console.log("Comment Author ID");
  console.log(commentauthorid);
  const commentResult = await commentCollection
    .find({ commentauthorid: commentauthorid })
    .toArray();
  console.log(commentResult);
  

  for (const value of commentResult) {
    console.log("Testing6 commented user");
    console.log(value.commentreceiverid);
    var receiverObject = new ObjectId(value.commentreceiverid);
    const commentedUser = await db.collection("users").findOne({ _id: receiverObject });
    console.log("Testing commented user");
    console.log(commentedUser)
    result.addUserComment({
      email: commentedUser!.email,
      id: value._id.toString(),
      author_image: commentedUser!.imageurl,
      testimonial_author: commentedUser!.fullname,
      testimonial_text: value.comment,
    });
  }

  res.status(201).json(result);
  client.close();
}
export default handler;
