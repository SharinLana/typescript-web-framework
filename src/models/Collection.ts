import { User } from "./User";
import { Eventing } from "./Eventing";

export class Collection {
  model: User[] = [];
  events: Eventing = new Eventing();

  get on() {
    return this.events.on; 
    // if the property initialized without constructor, 
    // we cannot use the shorten syntax: on = this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
}
