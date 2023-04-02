import { UserComment } from "@/models/post/usercomment";

type UserCommentCardProps = {
  item: UserComment;
};
const UserCommentCard: React.FC<UserCommentCardProps> = (props) => {
 
  return (
    <div>
      <span>{props.item.email}</span>    
    </div>
  );
};

export default UserCommentCard;