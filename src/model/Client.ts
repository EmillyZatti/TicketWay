import Person from "./Person";

export default class Client extends Person {
  constructor(name: string, cpf: string, age: number) {
    super(name, cpf, age);
  }
}
