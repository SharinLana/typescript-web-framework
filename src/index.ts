import { User } from "./models/User";

const user = new User({ name: "Max", age: 76 });
user.save();
// check the result ib the browser => devtools => Fetch/XHR
