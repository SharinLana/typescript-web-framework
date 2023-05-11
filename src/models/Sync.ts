import axios, { AxiosPromise } from "axios";
import { UserProps } from "./User";

export class Sync {
  constructor(private rootUrl: string) {}

  fetch(data: UserProps): AxiosPromise {
    return axios.get(`${this.rootUrl}/${data.id}`);
  }

  save(data: UserProps): AxiosPromise {
    if (data.id) {
      return axios.put(`${this.rootUrl}/${data.id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
