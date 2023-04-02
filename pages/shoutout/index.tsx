import { GetServerSideProps } from "next";
import { UserShoutOutListObject } from "@/models/shoutout/user";
function ShoutOut(props: { data: UserShoutOutListObject }) {
  console.log(props);
  return <h1>Shout Out Detail Page</h1>;
}

export const getServerSideProps: GetServerSideProps<{
  data: UserShoutOutListObject;
}> = async (context) => {
  var userList = await fetch("http://localhost:3000/api/shoutout/fetchUser", {
    method: "GET",
  });
  var data: UserShoutOutListObject = await userList.json();
  return {
    props: {
      data,
    },
  };
};

export default ShoutOut;
