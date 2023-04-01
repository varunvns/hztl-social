import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";
import { getSession } from "next-auth/react";
import { useState, useEffect, useContext} from "react";
import { SessionData } from "@/models/oauth/signup";
import { Session } from "next-auth";
import { UserProfileProps, ChangePassword } from "@/models/oauth/signup";
import NotificationContext from "@/store/notification-context";

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const { session } = props;
  const notificationContext = useContext(NotificationContext);

  function OnChangePasswordHandler(passwordData: ChangePassword) {
    notificationContext.showNotification({
      title: "Changing Password..",
      message: "In Progress...",
      status: "pending",
    });
    fetch("/api/auth/changepassword", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        notificationContext.showNotification({
          title: "Password Changed",
          message: data.message,
          status: "success",
        });
      });
  }
  return (
    <section className={classes.profile}>
      <h1>User Name is {session?.user?.name}</h1>
      <ProfileForm OnChangePassword={OnChangePasswordHandler} />
    </section>
  );
};

export default UserProfile;
