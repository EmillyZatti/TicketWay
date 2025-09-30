import * as PromptSync from "prompt-sync";
import MainController from "../control/MainController";

export default class EmployeeRegister {
  private prompt = PromptSync();
  private control: MainController;

  constructor(control: MainController) {
    this.control = control;
  }

  public addEmployee(): void {
    let name = this.prompt("Digite o nome do colaborador:");
    let cpf = this.prompt("Digite o cpf do colaborador:");
    let age = parseInt(this.prompt("Digite a idade do colaborador:"));
    let employee = this.control.getNewEmployee(name, cpf, age);
  }
}
