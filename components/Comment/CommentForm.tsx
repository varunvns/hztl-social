<<<<<<< HEAD
import { Fragment, useCallback } from 'react';
import classes from './CommentForm.module.css';

const CommentForm = ({ ...props }) => {
  let fields = {
    author_name: '',
    author_email: '',
    content: '',
    post: props.post_id, //getting this from the main component
  };
  const fieldChangeHandler = (e: any) => {
    switch (e.target.name) {
      case 'commenter-name':
        fields.author_name = e.target.value;
        break;
      case 'commenter-email':
        fields.author_email = e.target.value;
        break;
      case 'commenter-message':
        fields.content = e.target.value;
        break;
    }
  };

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const url = 'https//localhost:3000';
    // let response = await Axios({
    //         method : 'post',
    //         url : url + `comments`,
    //         data : fields
    //     }
    // );

    fetch('https://api.github.com/orgs/axios')
      .then((res) => res.json()) // one extra step
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Fragment>
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={fieldChangeHandler}
          type="text"
          name="commenter-name"
        />
        <input
          onChange={fieldChangeHandler}
          type="email"
          name="commenter-email"
        />
        <textarea
          onChange={fieldChangeHandler}
          name="commenter-message"
        ></textarea>
        <button type="submit" className="primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default CommentForm;
=======
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
>>>>>>> f6b70e1fe04aade04e9ef0ffb604a7b5fa518d80
