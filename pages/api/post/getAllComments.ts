import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";
import { 
  UserCommentList,
  UserCommentListObject,
} from "@/models/post/usercomment";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return;
  }
  const session = await getServerSession(req, res, authOptions);
  console.log(session);
  if (!session) {
    res.status(401).json('not in a session');
    return;
  }
  
  const userEmail = session.user!.email;
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
  const commentResult = await commentCollection.find({commentauthorid:commentauthorid }).toArray();

  const user = await db.collection("users").findOne({ email: userEmail });

  var result = new UserCommentListObject([]);
  commentResult.forEach(function (value) {
    result.addUserComment({
        email :userEmail!,       
        id: value._id.toString(),
        author_image: user!.imageUrl,
        testimonial_author : userEmail!,
        testimonial_text:value.comment      
    })
  })

  res.status(201).json(result);
  client.close();
}
export default handler;