import React from 'react';
import {UserComment,UserCommentList} from '../../models/post/usercomment';
import UserCommentCard from './UserCommentCard';


type UserCommentCardProps = {
  userCommentList: Array<UserComment>;
};

const UserCommentListComp: React.FC<UserCommentCardProps> = (props) => {
  console.log(props);
  return (
    <div>
      {props.userCommentList.map((item) => {
        return <UserCommentCard key={item.id} item={item}></UserCommentCard>;
      })}
    </div>
  );
};
export default UserCommentListComp;

