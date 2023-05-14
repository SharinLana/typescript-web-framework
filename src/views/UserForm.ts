export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <input />
    </div>
    `;
  }

  render(): void {
    const templateElem = document.createElement("template");
    templateElem.innerHTML = this.template();

    this.parent.append(templateElem.content);
  }
}
