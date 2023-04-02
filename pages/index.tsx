import { Inter } from "next/font/google";
//mport styles from '@/styles/Home.module.css'
import StartingPageContent from "@/components/StartingPage/StartingPage";
import ShoutOut from "@/components/Comment/ShoutOut";
import SectionCounter from "@/components/SectionCounter/SectionCounter";
import Testimonials from "@/components/Testimonials/Testimonials";
import BodyEnd from "@/components/BodyEnd/BodyEnd";
import MainPromo from "@/components/WelcomePromo/MainPromo";
import Banner from "@/components/Banner/Banner";
import AuthForm from "@/components/Auth/AuthForm";

import { banner } from "@/models/marketing/banner";

import { getServerSession } from "next-auth/next";
import { UserShoutOutListObject } from "@/models/shoutout/user";
import { GetServerSideProps } from "next";
import { authOptions } from "./api/auth/[...nextauth]";
import { SessionData } from "@/models/oauth/signup";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import UserCommentListComp from "@/components/Card/UserCommentListComp";
import { InferGetStaticPropsType } from "next";
import { SaveCommentModel, SaveCommentModelList } from "../models/post/comment";
import {
  UserCommentListObject,
  CustomHomePageModel,
} from "@/models/post/usercomment";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: { data: CustomHomePageModel }) {
  console.log("customeHome");
  console.log(props);
  const router = useRouter();
  const [notLoggedInSession, SetNotLoggedInSession] = useState(true);
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        SetNotLoggedInSession(false);
      } else {
        SetNotLoggedInSession(true);
      }
    });
  }, []);
  return (
    <>
      {/* <StartingPageContent /> */}
      <Banner {...banner} />
      {notLoggedInSession && <AuthForm />}
      <MainPromo shoutoutList={props.data[0].shoutList} />
      <SectionCounter />
      {props.data[1].userCommentList.length > 0 && (
        <Testimonials items={props.data[1].userCommentList} />
      )}
      <BodyEnd />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: CustomHomePageModel;
}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log("Debugging session");
  console.log(session);
  var userList = await fetch(
    "https://hztl-social.vercel.app/api/user/usercomments",
    {
      method: "GET",
    }
  );
  var userData: UserShoutOutListObject = await userList.json();

  const res = await fetch(
    "https://hztl-social.vercel.app/api/post/getAllComments",
    {
      method: "POST",
      body: JSON.stringify({
        email: session?.user?.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const commentData: UserCommentListObject = await res.json();
  const data: CustomHomePageModel = [userData, commentData];
  return {
    props: {
      data,
    },
  };
};
