import { User } from "./models/User";

const user = User.buildUser({name: "helga", age: 19});
console.log(user)
console.log(user.get("name"));
