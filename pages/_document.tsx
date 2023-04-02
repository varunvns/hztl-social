import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BodyEnd from "@/components/BodyEnd/BodyEnd";

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
  );
}
