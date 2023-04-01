import React, { Fragment } from 'react';
import CommentForm from '../Comment/CommentForm';
import CommentList from '../Comment/CommentList';

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
      {/* <CommentList comments={props.comments} />
      <CommentForm post_id={props.post.id}/> 
       remove it later */}      
      <CommentForm post_id='test'/> 
    </Fragment>
  );
}

export default ShoutOut;
