import Person from "./Person";

export default class Employee extends Person {
  constructor(name: string, cpf: string, age: number) {
    super(name, cpf, age);
  }

  public toString(): String {
    return `Cliente: ${this.getName()} (CPF: ${this.getCPF()}, Idade: ${this.getAge()})`;
  }
}
