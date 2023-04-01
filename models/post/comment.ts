export type CommentModel = {
    id: number;
    author_avatar_url: string;
    author_name: string;
    content: string;
}

export type CommentsListPropsModel = {
    comments: Array<CommentModel>;
}

export type CommentResponseModel = {
    id: number;
    commentreceiverid:number;
    commentauthorid:number;
    DateTime: string;   
    comment: string;
}