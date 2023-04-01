import { Fragment, useContext } from "react";
import MainNavigation from "@/components/MainNavigation/MainNavigation";
import NotificationContext from "@/store/notification-context";
import Notification from "../Notification/Notification";

function Layout(props: any) {
  const notificationContext = useContext(NotificationContext);
  const activeNotification = notificationContext.notification;
  return (
    <Fragment>
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
