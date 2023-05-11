import { User } from "./models/User";

const user = new User({ id: 1 });

user.set({ name: "Helena", age: 39 });
user.save();
// check the result ib the browser => devtools => Fetch/XHR

