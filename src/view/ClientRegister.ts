import * as PromptSync from "prompt-sync";
import MainController from "../control/MainController";

export default class ClientRegister {
  private prompt;
  private control: MainController;

  constructor(control: MainController) {
    this.control = new MainController();
    this.prompt = PromptSync();
  }

  public addClient(): void {
    let name = this.prompt("Digite o nome do cliente:");
    let cpf = this.prompt("Digite o cpf do cliente:");
    let age = parseInt(this.prompt("Digite a idade do cliente:"));
    let client = this.control.getNewClient(name, cpf, age);
  }
}
