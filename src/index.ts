import { User } from "./models/User";

const user = new User({ name: "Max", age: 1 });

user.on("save", () => {
  console.log(user);
});
user.save();
