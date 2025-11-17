import Person from "../model/Person";
import Transport from "../model/Transport";

export default class GenericDao<T> {
  private name: string = "";
  private t!: T;
  constructor(t: T) {
    this.t = t;
    if (t instanceof Person) {
      this.name = "person";
    }
    if (t instanceof Transport) {
      this.name = "transport";
    }
  }
  public save(t: T): void {
    console.log(this.name + "Salvo na tabela correta!");
  }
}
