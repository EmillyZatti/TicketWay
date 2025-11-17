import type { Inames } from "../interfaces/INames";

export default abstract class Person implements Inames {
  private id: number;
  name!: string;
  private cpf!: string;
  private age!: number;

  constructor(id: number, name: string, cpf: string, age: number) {
    this.id = id;
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

  public abstract toString(): String;
}
