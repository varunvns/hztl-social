import NextAuth from "next-auth";
import { AuthOptions } from "next-auth/core/types";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "@/lib/db";
import { verifyPassword } from "@/lib/auth";
import {CredentialModel} from "@/models/oauth/signup";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        console.log(credentials);
        const {email, password} = credentials as CredentialModel;
        const client = await connectToDatabase();
        const db = client.db();
        const user = await db.collection("users").findOne({ email: email });
        console.log(user);
        if (!user) {
          client.close();
          throw new Error("No User found");
        }
        var isValid = await verifyPassword(password, user.password);
        console.log(isValid);
        if (!isValid) {
          client.close();
          throw new Error("Password do not match");
        }
        client.close();
        // confirmed users
        return {
          name: user.email,
          email: user.email,
          image: "",
          id: user._id.toString(),
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);
