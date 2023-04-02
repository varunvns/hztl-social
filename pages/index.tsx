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
import UserCommentListComp from "@/components/Card/UserCommentListComp";
import { GetServerSideProps ,InferGetStaticPropsType } from 'next';
import {SaveCommentModel,SaveCommentModelList} from '../models/post/comment';
import { UserCommentListObject } from "@/models/post/usercomment";

const inter = Inter({ subsets: ["latin"] });


function UserCommentList(props: { data: UserCommentListObject }) {
  console.log(props);
  return (
    <>
      <h1>User Comments from home page</h1>
      <UserCommentListComp userCommentList={props.data.userCommentList}></UserCommentListComp>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{ 
  allComments: UserCommentListObject ;
}> = async (context) => {
  console.log("GetStaticProps");
  const res = await fetch('http://localhost:3000/api/post/getAllComments');
  console.log(res);
  const allComments: UserCommentListObject = await res.json();
  console.log(allComments.userCommentList);

 
  return {
    props: {
      allComments,
    },
  }
};


export default function Home(props :{allComments: UserCommentListObject}) {
  return (
    <>
      {/* <StartingPageContent /> */}
      <Banner />
      <MainPromo />
      <SectionCounter />
      <UserCommentList data={props.allComments} />
      <Testimonials />
      <BodyEnd />
    </>
  );
}
