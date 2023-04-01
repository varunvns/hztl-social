import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { SessionData } from "@/models/oauth/signup";
import { Session } from "next-auth";
import { UserProfileProps, ChangePassword } from "@/models/oauth/signup";

const UserProfile: React.FC<UserProfileProps> = (props) => {
  const { session } = props;
  function OnChangePasswordHandler(passwordData: ChangePassword) {
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
