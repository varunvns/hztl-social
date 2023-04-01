import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import CommentForm from "@/components/Comment/CommentForm";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <CommentForm/>
    </>
  );
}
