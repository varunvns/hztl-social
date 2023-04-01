import React from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function ShoutOut({ ...props }) {
  return (
    <>
      <div id="wrapper">
        <div id="main">
          {props.post === null ? (
            <h1>Not found</h1>
          ) : (
            <>
              <h1>hello ShoutOut</h1>
            </>
          )}
        </div>
      </div>
      {/* 
      <CommentForm post_id={props.post.id}/> 
       remove it later */} 
      {/* <CommentList comments={props.comments} />      */}
      <CommentForm /> 
    </>
  );
}

export default ShoutOut;
