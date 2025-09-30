import Person from "./Person";

export default class Employee extends Person {
  constructor(name: string, cpf: string, age: number) {
    super(name, cpf, age);
  }
}
