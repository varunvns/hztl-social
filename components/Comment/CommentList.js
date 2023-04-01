export default ({ ...props}) => {
    let numComments = props.comments !== null ? props.comments.length : 0;
    return (
        <div className="comments col-6 col-12-small">
            <h2>{numComments} Comment(s)</h2>
            {props.comments === null ? (
                <p>Be the first one to comment...</p>
            ) : (
                props.comments.map( comment => {
                    return (
                        <div key={comment.id} className="comment">
                            <img className="comment-avatar" src={comment.author_avatar_urls[48]} />
                            <h4 className="comment-author-name">{comment.author_name}</h4>
                            <div className="comment-content"
                                    key={comment.id}
                                    dangerouslySetInnerHTML={ { __html : comment.content.rendered } }>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
    )
}