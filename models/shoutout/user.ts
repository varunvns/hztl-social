import { Session } from "next-auth";
export class UserShoutOut {
  email: string = "";
  id: string = "";
  comment: number = 0;
  imageurl: string = "";
  name: string = ""
}

export interface UserShoutOutList {
  shoutList: Array<UserShoutOut>;
  session?: Session,
  addShoutOut: (shoutout: UserShoutOut) => void;
}


export class UserShoutOutListObject implements UserShoutOutList {
  constructor(public shoutList: Array<UserShoutOut>, public session?: Session) {}
  addShoutOut(shoutout: UserShoutOut) {
    this.shoutList.push(shoutout);
  }
}


