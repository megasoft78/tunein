export interface IUser extends Document {
  save(): void;
  _id: any;
  email: string;
  password: string;
}

export interface Users {
  [key: number]: IUser;
}
