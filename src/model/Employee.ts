import Person from "./Person";

export default class Employee extends Person {
  constructor(id: number, name: string, cpf: string, age: number) {
    super(id, name, cpf, age);
  }

  public toString(): String {
    return `Cliente: ${this.getName()} (CPF: ${this.getCPF()}, Idade: ${this.getAge()})`;
  }
}
