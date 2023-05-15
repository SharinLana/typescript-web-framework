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

    if (input) {
      const newName = input.value;
      this.model.set({ name: newName });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

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
}
