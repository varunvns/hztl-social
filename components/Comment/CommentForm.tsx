import { useCallback } from 'react';

const  CommentForm = ({...props}) => {

    let fields = {
        author_name : '',
        author_email : '',
        content : '',
        post : props.post_id //getting this from the main component
    }
    const fieldChangeHandler = (e : any)=>{
        switch(e.target.name){
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
    }

    const handleSubmit = useCallback( (e : React.FormEvent) => {
        e.preventDefault();

        fetch('https://api.github.com/orgs/axios')
            .then(res => res.json())    // one extra step
            .then(data => {
                console.log(data) ;
            })
            .catch(error => console.error(error));
       
    }, [])

    return (
            <>
            <h2>Add a Comment</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={fieldChangeHandler} type="text" name="commenter-name"/>
                <input onChange={fieldChangeHandler} type="email" name="commenter-email"/>
                <textarea onChange={fieldChangeHandler} name="commenter-message"></textarea>
                <button type="submit" className="primary">Submit</button>
            </form>
            </>
        )
    }

    export default CommentForm;