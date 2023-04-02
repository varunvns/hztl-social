export class UserShoutOut {
  email: string = "";
  id: string = "";
  comment: number = 0;
  imageurl: string = ""
}

export interface UserShoutOutList {
  shoutList: Array<UserShoutOut>;
  addShoutOut: (shoutout: UserShoutOut) => void;
}


export class UserShoutOutListObject implements UserShoutOutList {
  constructor(public shoutList: Array<UserShoutOut>) {}
  addShoutOut(shoutout: UserShoutOut) {
    this.shoutList.push(shoutout);
  }
}


