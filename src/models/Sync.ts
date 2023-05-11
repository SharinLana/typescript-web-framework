import axios, { AxiosResponse } from "axios";
import { UserProps } from "./User";

export class Sync {
  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    if (this.get("id")) {
      // put request
      axios.put(`http://localhost:3000/users/${this.get("id")}`, this.data);
    } else {
      // post request
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
