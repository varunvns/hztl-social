import { Fragment, useCallback } from 'react'
import Axios from 'axios'

export default ({...props}) => {

    let fields = {
        author_name : '',
        author_email : '',
        content : '',
        post : props.post_id //getting this from the main component
    }
    const fieldChangeHandler = (e)=>{
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

    const handleSubmit = useCallback( async (e) => {
        e.preventDefault();
        const url = 'https//localhost:3000';
        let response = await Axios({
                method : 'post',
                url : url + `comments`,
                data : fields
            }
        );
        console.log(response);
 }, [])

    return (
            <Fragment>
            <h2>Add a Comment</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={fieldChangeHandler} type="text" name="commenter-name"/>
                <input onChange={fieldChangeHandler} type="email" name="commenter-email"/>
                <textarea onChange={fieldChangeHandler} name="commenter-message"></textarea>
                <button type="submit" className="primary">Submit</button>
            </form>
            </Fragment>
        )
    }