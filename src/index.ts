import { User } from "./models/User";

const user = new User({ name: "Max", age: 76 });
user.events.on("click", () => {
  console.log("Clicked!")
});
user.events.trigger("click")

