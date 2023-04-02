import { type } from "os";
import { UserShoutOutList, UserShoutOutListObject } from "../shoutout/user";

export interface IUserComment {
    email : string;
    id: string;
    author_image:string;
    testimonial_author:string;
    testimonial_text:string;
}
export class UserComment implements IUserComment{
  constructor(
    public email : string,
    public id: string,
    public author_image:string,
    public testimonial_author:string,
    public testimonial_text:string,
  ){}
};

export interface UserCommentList {
  userCommentList: Array<UserComment>;
  addUserComment: (userComment: UserComment ) => void;
}

export class UserCommentListObject implements UserCommentList {
  constructor(public userCommentList: Array<UserComment> )  {

  }
  addUserComment(userComment: IUserComment){
    this.userCommentList.push(userComment);
  }
}

export type CustomHomePageModel = [ UserShoutOutListObject,UserCommentListObject ];