export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log("Hi there!");
  }

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <input />
      <button>Click</button>
    </div>
    `;
  }

  render(): void {
    const templateElem = document.createElement("template");
    templateElem.innerHTML = this.template();

    this.parent.append(templateElem.content);
  }
}
