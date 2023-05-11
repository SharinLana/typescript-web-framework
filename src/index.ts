import axios from "axios";

axios.post("http://localhost:3000/users", {
  name: "John Doe",
  age: 30,
})

// Network => Fetch/XHR => users