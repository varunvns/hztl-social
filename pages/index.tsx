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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <StartingPageContent />
      <Banner />
      <MainPromo />
      <SectionCounter />
      <Testimonials />
      <BodyEnd />
    </>
  );
}
