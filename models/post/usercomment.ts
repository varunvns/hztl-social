export class UserComment{
    email : string = '';
    id: string = '';
    author_image:string = '';
    testimonial_author:string = '';
    testimonial_text:string = '';
};

export interface UserCommentList {
  userCommentList: Array<UserComment>;
  addUserComment: (userComment: UserComment ) => void;
}

export class UserCommentListObject implements UserCommentList {
  constructor(public userCommentList: Array<UserComment> )  {

  }
  addUserComment(userComment: UserComment){
    this.userCommentList.push(userComment);
  }
}