import PromptSync from "prompt-sync";
import MainController from "../control/MainController";
import Sale from "../service/Sale";
import Client from "../model/Client";
import Transport from "../model/Transport";
import Ticket from "../model/Ticket";
import Employee from "../model/Employee";
import { SaleStatus } from "../enuns/SaleStatus";
import ClientRegister from "./ClientRegister";
import { Cities } from "../enuns/Cities";
import City from "../model/City";

export default class SaleRegister {
  private prompt = PromptSync();
  private control: MainController;
  private tickets!: Ticket[];

  public constructor(control: MainController) {
    this.control = control;
  }

  public addSale(): void {
    let sale = this.control.getNewSale();
    let client = this.addClient();
    let employee = this.addEmployee();
    let aux = "S";

    do {
      this.addTicketOnSale(client);
      aux = this.prompt(
        "Deseja vender mais algum ticket? : \nS = Sim \nN = Não"
      );
    } while (aux === "S");

    sale.setStatus(SaleStatus.REALIZADA);
    this.control.db.addNewSale(sale);
  }

  public addClient(): Client {
    let clients: Client[] = this.control.db.getAllClients();
    console.log("\n----------LISTA DE CLIENTES---------------");
    for (let i = 0; i < clients.length; i++) {
      console.log(`ID: ${i} Nome: \n`);
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

  public addEmployee(): Employee | undefined {
    let employees: Employee[] = this.control.db.getAllEmployees();
    console.log("\n-------------LISTA DE FUNCIONARIOS------------------");
    for (let i = 0; i < employees.length; i++) {
      console.log(`ID: ${i} Nome: ${employees[i]?.getName()}`);
    }

    let employeeOption: number;

    try {
      employeeOption = parseInt(
        this.prompt(`\nDigite o ID do Funcionário que está efetuando a venda:`)
      );

      if (typeof employees[employeeOption] == undefined) {
        throw new Error("valor inválido");
      } else {
        return employees[employeeOption];
      }
    } catch (Error) {
      console.log("valor Inválido");
    } finally {
      this.addEmployee();
    }
  }

  public addTicketOnSale(cli: Client) {
    let client = cli;
    let cities = this.control.db.getAllCities();
    let transports = this.control.db.getAllTransport();
    let origin;
    let destiny;
    let originID;
    let destinyID;
    let transport;
    let price;

    console.log("Cidades:");
    for (let i = 0; i < cities.length; i++) {
      console.log(`ID ${i} Nome: ${cities[i].getName()}`);
    }

    do {
      originID = parseInt(this.prompt("Digite o ID da cidade de origem: "));
      destinyID = parseInt(this.prompt("Digite o ID da cidade de destino: "));

      if (originID === destinyID) {
        console.log(
          "As cidades de origem e destino não podem ser iguais! Vamos tentar novamente."
        );
      } else {
        origin = cities[originID];
        destiny = cities[destinyID];
      }
    } while (originID === destinyID);

    console.log("Transportes");
    for (let i = 0; i < transports.length; i++) {
      console.log(`ID ${i} Nome: ${transports[i].getName()}`);
    }

    let transportID = parseInt(this.prompt("Digite o ID do transporte: "));
    transport = transports[transportID];
    price = parseFloat(this.prompt("Digite o valor do Ticket: "));

    let ticket = this.control.getNewTicket(price, client, transport);
    ticket.setOrigin(origin!);
    ticket.setDestination(destiny!);
    this.tickets.push(ticket);
  }
}
