// import "@/styles/globals.css";
import "@/styles/Theme/css/animate.css";
import "@/styles/Theme/css/owl.carousel.min.css";
import "@/styles/Theme/css/owl.theme.default.min.css";
import "@/styles/Theme/css/magnific-popup.css";
import "@/styles/Theme/css/bootstrap-datepicker.css";
import "@/styles/Theme/css/jquery.timepicker.css";
import "@/styles/Theme/css/flaticon.css";
import "@/styles/Theme/css/style.css";
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
