import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.model.on("change", () => {
      this.render(); // re-rendering the HTML element on every change event (e.g. when setting the new random age)
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:#set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    const newName = input?.value;

    this.model.set({ name: newName });
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

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
      <button class="set-name">Change name</button>
      <button id="set-age">Set random age</button>
    </div>
    `;
  }

  render(): void {
    // empty the parent element on each re-render
    this.parent.innerHTML = "";

    const templateElem = document.createElement("template");
    templateElem.innerHTML = this.template();

    this.bindEvents(templateElem.content);

    this.parent.append(templateElem.content);
  }
}
