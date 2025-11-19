import PromptSync from "prompt-sync";
import MainController from "../control/MainController";

export default class ClientRegister {
  private prompt;
  private control: MainController;

  constructor(control: MainController) {
    this.control = new MainController();
    this.prompt = PromptSync();
  }

  public addClient(): void {
    let clients = this.control.db.getAllClients();
    let aux = "S";
    console.log("Clientes Cadastrados");
    for (let i = 0; i < clients.length; i++) {
      console.log(`ID: ${i} Nome: ${clients[i].getName()}`);
    }

    do {
      let name = this.prompt("Digite o nome do cliente:");
      let cpf = this.prompt("Digite o cpf do cliente:");
      let age = parseInt(this.prompt("Digite a idade do cliente:"));
      let client = this.control.getNewClient(name, cpf, age);
      this.control.db.addNewClient(client);
      aux = this.prompt("Deseja cadastrar cliente?: \nS = Sim \nN = Nao");
    } while (aux === "S");
  }
}
