import React, { Fragment } from 'react';

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
    </Fragment>
  );
}

export default ShoutOut;
