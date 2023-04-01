import { useEffect, useState, useContext} from "react";
import MessageContext from "../CommentFormSuccess/CommentSuccesMessageContext";

function Messages(props) {
    const messageContext = useContext(MessageContext);

    function MessageSteps(messageData) {
        messageContext.showMessage({
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
            title: 'Success',
            message: 'Your comment was saved',
            status: 'success'
          });
        })
    }
  }
  
  export default Messages;
  

