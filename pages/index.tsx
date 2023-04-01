import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import StartingPageContent from '@/components/StartingPage/StartingPage';
import ShoutOut from '@/components/Comment/ShoutOut';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <StartingPageContent></StartingPageContent>
      
    </>
  );
}
