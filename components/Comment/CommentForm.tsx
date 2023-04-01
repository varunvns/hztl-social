// import { useCallback } from 'react';
import { useState, useRef } from "react";
import classes from './CommentForm.module.css';

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
    const messageRef = useRef<HTMLTextAreaElement>(null);
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
            <section className={classes.commentform}>
            <h2>Add a Comment</h2>
            <form className={classes.forms} onSubmit={handleSubmit}>
                <div className={classes.inputfield}>
                <label htmlFor="message">Your Message</label>
                <textarea rows={10} cols={50} name="commenter-message" id="commenter-message"required ref={messageRef}/>
                </div>
                <br />
                <div className="">
                <button type="submit" className="primarybutton">Submit</button>
                </div>
            </form>
            </section>
            </>
        )
 };
    export default CommentForm;