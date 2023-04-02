import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";
import { 
  UserCommentList,
  UserCommentListObject,
} from "@/models/post/usercomment";
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserCommentList>
) {
  if (req.method !== "GET") {
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();
  const commentCollection = db.collection("comments");
  const commentResult = await commentCollection.find({}).toArray();


  var result = new UserCommentListObject([]);
  commentResult.forEach(function (value) {
    result.addUserComment({
        email : value.email,
        id: value._id.toString(),
        author_image:'https://dummyimage.com/200/ffffff/000000',
        testimonial_author:'lorem ipsum',
        testimonial_text:value.comment      
    })
  })

  res.status(201).json(result);
  client.close();
}
export default handler;