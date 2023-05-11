import { User } from "./models/User";

const user = new User({ name: "John", age: 25 });

user.on("click", () => {})
user.on("click", () => {})
user.on("mouseover", () => {})

console.log(user)