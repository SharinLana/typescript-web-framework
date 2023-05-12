import { User } from "./models/User";

const user = new User({ name: "Max", age: 76 });
user.on("change", () => {
  console.log("User changed");
});
user.trigger("change");

console.log(user.get("name"));
