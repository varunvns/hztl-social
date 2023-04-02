import { connectToDatabase } from "@/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { SaveCommentResponseModel } from "@/models/post/comment";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

async function handler( req: NextApiRequest,
    res: NextApiResponse<SaveCommentResponseModel>
) 
{

    console.log("/api/getusercomments");
    const session = await getServerSession(req, res, authOptions);
    console.log(session);
    if (!session) {
      res.status(401).json({ message: "Unauthorized login in the getUserComments" });
      return;
    }

    const userEmail  = session.user!.email;
    const client = await connectToDatabase();
    const db = client.db();
   
    // const user = await db.collection("users").findOne({ email: userEmail });
    // if (!user) {
    //   res.status(404).json({ message: "User not found in the getUserComments" });
    //   client.close();
    //   return;
    // }
  
    const result = await db.collection("comments").find({'commentauthorid':userEmail}).sort( { 'timestamp': -1 } ).limit(5);
    
   
    console.log(result);
    res.status(201).json({ message: "Received comments from mongodb" });
    client.close();
}


export default handler;