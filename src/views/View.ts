import { User } from "../models/User";

export abstract class View {
  constructor(public parent: Element, public model: User) {
    this.model.on("change", () => {
      this.render(); // re-rendering the HTML element on every change event (e.g. when setting the new random age)
    });
  }

  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
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
