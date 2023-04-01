export type NotificationRequest = {
  title: string;
  message: string;
  status: string;
};

export type NotificationContextModel = {
  notification: NotificationRequest | null | undefined;
  showNotification: (notificationData: NotificationRequest) => void;
  hideNotification: () => void;
};

export type NotificationPageProps = {
    children? : React.ReactNode
}
