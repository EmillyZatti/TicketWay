import type { Inames } from "../interfaces/INames";

export default class City {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): String {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}
