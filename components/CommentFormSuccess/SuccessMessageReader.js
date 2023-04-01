import { useEffect, useState, useContext} from "react";
import MessageContext from "../CommentFormSuccess/CommentSuccesMessageContext";

function Messages(props) {
    const messageContext = useContext(MessageContext);

    function addCommentHandler(commentData) {
        messageContext.showMessage({
        title: 'Adding your Comment',
        message: 'Your comment is currently being stored',
        status: 'pending'
      });
      // send data to API
      fetch(`/api/API/${eventID}`, {
        // API details
      })
        .then((response) => {
          if(response.ok){
            return response.json();
          }
          return response.json().then((data)=>{
            throw new Error(data.message || 'Something went wrong');
          })
        })
        .then((data) => {
          console.log(data);
          messageContext.showMessage({
            title: 'SUCCESS',
            message: 'Your comment was saved',
            status: 'success'
          });
        })
        .catch((error)=>{
            notificationContext.showMessage({
              title: 'ERROR',
              message: 'Something went wrong',
              status: 'error'
            });
          });
    }
  }
  
  export default Messages;
  

