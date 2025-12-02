import PromptSync from "prompt-sync";
import MainController from "../control/MainController";
import ClientValidator from "../service/ClientValidator";

export default class ClientRegister {
  private prompt;
  private control: MainController;

  constructor(control: MainController) {
    this.control = control;
    this.prompt = PromptSync();
  }

  public addClient(): void {
    let clients = this.control.db.getAllClients();
    let aux = "S";

    if (clients.length > 0) {
      console.log("Clientes Cadastrados");
      for (let i = 0; i < clients.length; i++) {
        console.log(`ID: ${i} Nome: ${clients[i].getName()}`);
      }
    }

    do {
      try {
        let name = this.prompt("Digite o nome do cliente:");
        this.control.clientValidator.validateName(name);
        let cpf = this.prompt("Digite o cpf do cliente:");
        this.control.clientValidator.validateCPF(cpf);
        let age = parseInt(this.prompt("Digite a idade do cliente:"));
        let client = this.control.getNewClient(name, cpf, age);
        this.control.db.addNewClient(client);
        aux = this.prompt(
          "Deseja cadastrar mais um cliente?: \nS = Sim \nN = Nao"
        );
      } catch (error) {
        console.log(error);
        console.log(`Vamos tentar novamente!`);
      } finally {
        this.addClient();
      }
    } while (aux === "S");
  }
}
