import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//mport styles from '@/styles/Home.module.css'
import StartingPageContent from '@/components/StartingPage/StartingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <StartingPageContent></StartingPageContent>
  )
}
