// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { SessionProvider } from "next-auth/react";
import { NotificationContextProvider } from "@/store/notification-context";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <NotificationContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NotificationContextProvider>
    </SessionProvider>
  );
}
