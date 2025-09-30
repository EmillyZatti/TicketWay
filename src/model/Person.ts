export default class Person {
  private name!: string;
  private cpf!: string;
  private age!: number;

  constructor(name: string, cpf: string, age: number) {
    this.name = name;
    this.cpf = cpf;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getCPF(): string {
    return this.cpf;
  }

  public setCPF(cpf: string): void {
    this.cpf = cpf;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    this.age = age;
  }
}
