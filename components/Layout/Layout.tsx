import { Fragment } from "react";
import MainNavigation from "@/components/MainNavigation/MainNavigation";

function Layout(props:any) {
  return (
    <Fragment>
      <MainNavigation />
      {props.children}
    </Fragment>
  );
}
export default Layout;