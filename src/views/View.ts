import { Model, HasId } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.model.on("change", () => {
      this.render(); // re-rendering the HTML element on every change event (e.g. when setting the new random age)
    });
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
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

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  render(): void {
    // empty the parent element on each re-render
    this.parent.innerHTML = "";

    const templateElem = document.createElement("template");
    templateElem.innerHTML = this.template();

    this.bindEvents(templateElem.content);
    this.mapRegions(templateElem.content);

    this.parent.append(templateElem.content);
  }
}
