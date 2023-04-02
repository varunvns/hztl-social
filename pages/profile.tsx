import UserProfile from "@/components/Profile/UserProfile";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { GetServerSideProps } from "next";
import type { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { SessionData } from "@/models/oauth/signup";
import Hero from "@/components/Hero/Hero";
import { profilehero } from "@/models/marketing/profilehero";

function ProfilePage(props: { data: SessionData }) {
  return (
    <>
      <Hero {...profilehero} title="Profile Page" />
      <UserProfile session={props.data} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: SessionData;
}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  const data: SessionData = session;
  return {
    props: {
      data,
    },
  };
};

export default ProfilePage;
