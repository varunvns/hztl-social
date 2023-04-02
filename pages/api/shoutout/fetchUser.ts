import type { NextApiRequest, NextApiResponse } from "next";
import { SignupResponse } from "@/models/oauth/signup";
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
  const userCollection = db.collection("users");
  const userResult = await userCollection.find({}).toArray();

  var result = new UserShoutOutListObject([]);
  userResult.forEach(function (value) {
    result.addShoutOut({
      id: value._id.toString(),
      email: value.email,
      comment: 0,
      imageurl: value.imageurl
    });
  });

  res.status(201).json(result);
  client.close();
}
export default handler;
