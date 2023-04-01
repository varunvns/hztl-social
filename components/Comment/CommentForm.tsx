// import { useCallback } from 'react';
import { useState, useRef } from "react";
// import classes from "./AuthForm.module.css";

async function createComment(comment: string) {
    let commentreceiverid =2;
    let commentauthorid =1;
    const response = await fetch("/api/post/comment", {
      method: "POST",
      body: JSON.stringify({ commentreceiverid,commentauthorid,comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    return data;
  }

const  CommentForm: React.FC = () => {

    // const commenterNameRef = useRef<HTMLInputElement>(null);
    // const commenterEmailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLInputElement>(null);
    
    // let fields = {
    //     author_name : '',
    //     author_email : '',
    //     content : '',
    //     post : props.post_id //getting this from the main component
    // }
    

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        console.log("Inside comment submit");
          try {
            const resp = await createComment(
                messageRef.current!.value
            );
            console.log(resp);
          } catch (error) {
            console.log(error);
          }
        
    }
           
       
    

    return (
            <>
            <h2>Add a Comment</h2>
            <form onSubmit={handleSubmit}>
                {/* <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="commenter-name" id="commenter-name" required ref={commenterNameRef}/>
                </div>
                <div className={classes.control}></div>
                <label htmlFor="email">Your Email</label>
                <input type="email" name="commenter-email" id="commenter-email"required ref={commenterEmailRef}/> */}
                <div className="">
                <label htmlFor="message">Your Message</label>
                <input type="textarea" name="commenter-message" id="commenter-message"required ref={messageRef}/>
                </div>
                <div className="">
                <button type="submit" className="primary">Submit</button>
                </div>
            </form>
            </>
        )
 };
    export default CommentForm;