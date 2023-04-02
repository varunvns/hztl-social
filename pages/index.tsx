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

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: { data: UserShoutOutListObject }) {
  console.log(props);
  return (
    <>
      {/* <StartingPageContent /> */}
      <Banner {...banner} />
      <AuthForm />
      <MainPromo />
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
  console.log("Chira");
  console.log(sessionData);
  var userList = await fetch("http://localhost:3000/api/user/usercomments", {
    method: "GET",
  });
  var data: UserShoutOutListObject = await userList.json();
  return {
    props: {
      data,
    },
  };
};
