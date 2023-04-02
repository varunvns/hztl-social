import { GetServerSideProps } from "next";
import { UserShoutOutListObject } from "@/models/shoutout/user";
import { Fragment } from "react";
import ShoutOutUser from "@/components/ShoutOut/ShoutOutUser";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { SessionData } from "@/models/oauth/signup";
import Hero from "@/components/Hero/Hero";
import { profilehero } from "@/models/marketing/profilehero";

function ShoutOut(props: { data: UserShoutOutListObject }) {
  console.log(props);
  return (
    <Fragment>
      <Hero {...profilehero} title="Shout Out Detail Page" />
      <ShoutOutUser shoutoutList={props.data.shoutList}></ShoutOutUser>
    </Fragment>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: UserShoutOutListObject;
}> = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  const sessionData: SessionData = session;
  console.log("Chira");
  console.log(sessionData);
  var userList = await fetch("http://localhost:3000/api/shoutout/fetchUser", {
    method: "GET",
  });
  var data: UserShoutOutListObject = await userList.json();
  data.shoutList = data.shoutList.filter(
    (item) => item.email !== sessionData?.user?.email
  );
  return {
    props: {
      data,
    },
  };
};

export default ShoutOut;
