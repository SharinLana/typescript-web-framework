import axios, { AxiosPromise } from "axios";

interface HasId {
  id: number;
}

export class Sync<T extends HasId> {
  constructor(private rootUrl: string) {}

  fetch(data: T): AxiosPromise {
    return axios.get(`${this.rootUrl}/${data.id}`);
  }

  save(data: T): AxiosPromise {
    if (data.id) {
      return axios.put(`${this.rootUrl}/${data.id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
