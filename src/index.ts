import { User } from "./models/User";

const user = new User({ name: "John", age: 25 });

user.set({ name: "Martha" });
console.log(user.get("name")); // John
