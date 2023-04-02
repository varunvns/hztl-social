import Head from "next/head";
import Image from "next/image";
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

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: { data: UserShoutOutListObject }) {
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
      <MainPromo shoutoutList={props.data.shoutList} />
      <SectionCounter />
      <Testimonials />
      <BodyEnd />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: UserShoutOutListObject;
}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  const sessionData: SessionData = session;
  var userList = await fetch(
    "https://hztl-social-varunvns.vercel.app/api/user/usercomments",
    {
      method: "GET",
    }
  );
  var data: UserShoutOutListObject = await userList.json();
  return {
    props: {
      data,
    },
  };
};
