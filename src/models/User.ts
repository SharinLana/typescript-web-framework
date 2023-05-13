import { Model } from "./Model";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users"; // available in the console after running: npm rum start:db

export class User extends Model<UserProps> {}
