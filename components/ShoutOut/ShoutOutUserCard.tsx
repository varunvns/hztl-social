import { UserShoutOut } from "@/models/shoutout/user";
import { useRouter } from "next/router";
import classes from "./ShoutOutUserCard.module.css";

type ShoutOutUserCardProps = {
  item: UserShoutOut;
};
const ShoutOutUserCard: React.FC<ShoutOutUserCardProps> = (props) => {
  const router = useRouter();
  const onClickhandler = function () {
    router.push(`/shoutout/${props.item.id}`);
  };
  return (
    <div className={classes.carditem}>
      <span className={classes.cardtext}>{props.item.email}</span>
      <button
        className={`${classes.shoutoutcta} btn btn-primary`}
        onClick={onClickhandler}
      >
        Give ShoutOut
      </button>
    </div>
  );
};

export default ShoutOutUserCard;
