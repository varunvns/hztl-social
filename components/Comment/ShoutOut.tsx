import React, { Fragment } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function ShoutOut({ ...props }) {
  return (
    <Fragment>
      <div id="wrapper">
        <div id="main">
          {props.post === null ? (
            <h1>Not found</h1>
          ) : (
            <Fragment>
              <h1>hello ShoutOut</h1>
            </Fragment>
          )}
        </div>
      </div>
      {/* 
      <CommentForm post_id={props.post.id}/> 
       remove it later */} 
      {/* <CommentList comments={props.comments} />      */}
      <CommentForm post_id={props.post}/> 
    </Fragment>
  );
}

export default ShoutOut;