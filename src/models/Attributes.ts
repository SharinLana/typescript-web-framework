export class Attributes<T extends object> {
  constructor(private data: T) {}

  // K can only ever be one of the keys of T
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}