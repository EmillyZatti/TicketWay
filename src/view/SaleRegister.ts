import * as PromptSync from "prompt-sync";
import MainController from "../control/MainController";
import Sale from "../service/Sale";
import Client from "../model/Client";
import Transport from "../model/Transport";
import Ticket from "../model/Ticket";
import Employee from "../model/Employee";
import { SaleStatus } from "../enuns/SaleStatus";
import ClientRegister from "./ClientRegister";

export default class SaleRegister {
  private prompt = PromptSync();
  private control: MainController;

  public constructor(control: MainController) {
    this.control = control;
  }

  public addSale(): void {
    let sale = this.control.getNewSale();
    sale.setClient(this.addClient());
    sale.setEmployee(this.addEmploye());
    let aux = "S";

    do {
      sale.addProductOnSale(this.addSaleItem(), this.addSaleQuantity());
      do {
        if (aux != "S" && aux != "N") {
          console.log("\n Nao entendi sua resposta!\n");
        }
        aux = this.prompt(
          "\nDeseja adicionar mais uma passagem? \nS. Sim \nNao \nResposta: "
        ).toUpperCase();
      } while (aux != "S" && aux != "N");
    } while (aux === "S");

    aux = "S";

    do {
      aux = this.prompt(
        "\nDeseja alterar alguma passagem? \nS. Sim \nN. Nao \nResposta: "
      ).toUpperCase();
      if (aux === "S") {
        this.changeSaleItem(sale);
      }
    } while (aux === "S");

    sale.setStatus(SaleStatus.REALIZADA);
    this.control.db.addNewSale(sale);
  }

  public addClient(): Client {
    console.log("\n----------LISTA DE CLIENTES---------------");
    let clients: Client[] = this.control.db.getAllClients();
    for (let i = 0; i < clients.length; i++) {
      console.log(`ID: ${i} Nome: ${clients[i].getName()}\n`);
    }

    let clientOption: number;
    do {
      clientOption = parseInt(
        this.prompt(`\nDigite o ID do cliente que está fazendo a compra: `),
        10
      );
    } while (isNaN(clientOption) || !Number.isInteger(clientOption));
    let clientSelected = this.control.db.getClient(clientOption);
    console.log("------------------------------------------");
    console.log(`cliente selecionado: ${clientSelected.getName()} \n`);
    return clientSelected;
  }
}
