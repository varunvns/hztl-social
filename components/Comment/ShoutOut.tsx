import React from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

type ShoutOutProps = {
  commentReceiverID: string | string[] | undefined;
};

const ShoutOut: React.FC<ShoutOutProps> = (props) => {
  return (
    <>
      <CommentForm commentReceiverID={props.commentReceiverID} />
    </>
  );
};

export default ShoutOut;
