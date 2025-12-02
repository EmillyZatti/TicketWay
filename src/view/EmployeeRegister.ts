import PromptSync from "prompt-sync";
import MainController from "../control/MainController";

export default class EmployeeRegister {
  private prompt = PromptSync();
  private control: MainController;

  constructor(control: MainController) {
    this.control = control;
  }

  public addEmployee(): void {
    let employees = this.control.db.getAllEmployees();
    let aux = "S";
    if (employees.length > 0){
      console.log("Funcionarios cadastrados");
      for (let i = 0; i < employees.length; i++) {
        console.log(`ID: ${i} Nome: ${employees[i].getName()}`);
      }
    }

    do {
      let name = this.prompt("Digite o nome do colaborador:");
      let cpf = this.prompt("Digite o cpf do colaborador:");
      let age = parseInt(this.prompt("Digite a idade do colaborador:"));
      let employee = this.control.getNewEmployee(name, cpf, age);
      this.control.db.addNewEmployee(employee);
      aux = this.prompt("Deseja cadastrar funcionario?: \nS = Sim \nN = Nao");
    } while (aux === "S");
  }
}
