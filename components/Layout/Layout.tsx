import { Fragment, useContext } from "react";
import Head from "next/head";
import MainNavigation from "@/components/MainNavigation/MainNavigation";
import NotificationContext from "@/store/notification-context";
import Notification from "../Notification/Notification";

function Layout(props: any) {
  const notificationContext = useContext(NotificationContext);
  const activeNotification = notificationContext.notification;
  return (
    <Fragment>
      <Head>
        <title>Horizontal Social</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link rel="stylesheet" href="../Theme/css/animate.css" />

        <link rel="stylesheet" href="../Theme/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="../Theme/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="../Theme/css/magnific-popup.css" />

        <link rel="stylesheet" href="../Theme/css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="../Theme/css/jquery.timepicker.css" />

        <link rel="stylesheet" href="../Theme/css/flaticon.css" />
        <link rel="stylesheet" href="../Theme/css/style.css" />
      </Head>
      <MainNavigation />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        ></Notification>
      )}
    </Fragment>
  );
}
export default Layout;
