import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:#set-age": this.onSetAgeClick,
    };
  }

  onSetAgeClick(): void {
    console.log("Set Age clicked!");
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <p>User name: ${this.model.get("name")}</p>
      <p>User age: ${this.model.get("age")}</p>
      <input />
      <button>Click</button>
      <button id="set-age">Set random age</button>
    </div>
    `;
  }

  render(): void {
    const templateElem = document.createElement("template");
    templateElem.innerHTML = this.template();

    this.bindEvents(templateElem.content);

    this.parent.append(templateElem.content);
  }
}
