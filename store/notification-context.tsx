import { createContext, useState, useEffect } from "react";
import {
  NotificationRequest,
  NotificationContextModel,
  NotificationPageProps
} from "@/models/notification/notification";

const NotificationContext = createContext<NotificationContextModel>({
  notification: null, // { title, message, status }
  showNotification: function (notificationData: NotificationRequest) {},
  hideNotification: function () {},
});

export const NotificationContextProvider = ({children}: NotificationPageProps) => {
  const [activeNotification, setActiveNotification] =
    useState<NotificationRequest | null>();

  useEffect(() => {
    if (
      activeNotification &&
      (activeNotification.status === "success" ||
        activeNotification.status === "error")
    ) {
      const timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [activeNotification]);

  function showNotificationHandler(notificationData: NotificationRequest) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  const context: NotificationContextModel = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
