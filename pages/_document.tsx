import { Html, Main, NextScript } from 'next/document'
import Head from '@/components/Head/Head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
