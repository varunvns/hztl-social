import ShoutOutUserCard from "./ShoutOutUserCard";
import { UserShoutOut } from "@/models/shoutout/user";
import classes from "./ShoutOutUser.module.css";

type ShoutOutUserCardProps = {
  shoutoutList: Array<UserShoutOut>;
};

const ShoutOutUser: React.FC<ShoutOutUserCardProps> = (props) => {
  console.log(props);
  return (
    <div className={classes.cards}>
      {props.shoutoutList.map((item) => {
        return <ShoutOutUserCard key={item.id} item={item}></ShoutOutUserCard>;
      })}
    </div>
  );
};
export default ShoutOutUser;
