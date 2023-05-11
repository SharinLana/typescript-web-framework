import { User } from "./models/User";

const user = new User({ name: "John", age: 25 });

user.on("click", () => {
  console.log("Click #1")
})
user.on("click", () => {
  console.log("Click #2")
})
user.on("mouseover", () => {
  console.log("Mouse over #1")
})

user.trigger("mouseover");