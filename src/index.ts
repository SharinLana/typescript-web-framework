import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({ name: "Pippa", age: 18 });

const userForm = new UserForm(document.querySelector("#root"), user);

userForm.render();
