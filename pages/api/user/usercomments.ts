import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";
import {
  UserShoutOut,
  UserShoutOutList,
  UserShoutOutListObject,
} from "@/models/shoutout/user";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserShoutOutList>
) {
  if (req.method !== "GET") {
    return;
  }
  const client = await connectToDatabase();

  const db = client.db();
  const userCollection = await db
    .collection("users")
    .find({})
    .limit(6)
    .toArray();

  var result = new UserShoutOutListObject([]);
  for (const value of userCollection) {
    var commentcount = await db
      .collection("comments")
      .find({ commentauthorid: value._id.toString() })
      .count();

    result.addShoutOut({
      id: value._id.toString(),
      email: value.email,
      comment: commentcount,
    });
  }

  res.status(201).json(result);
  client.close();
}
export default handler;
