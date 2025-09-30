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
  private control!: MainController;

  public constructor(control: MainController) {
    this.control = control;
  }
}

/*  public addSale(): void{
    let sale = this.control.getNewSale();
    sale.setClient(this.addClient());
    sale.setEmployee(this.addEmployee());
    let aux = 'S';

    do{
      sale.add
    }
  }
}

 
 
 
 
 
 
 
 
 
 
 
 
 
  /*public doSale() {
    let client = this.clientRegister.addClient();
    let continues = true;
    while (continues) {
      console.log("\n---- Registro de Venda ----");
      const employeeName = this.prompt("Nome do funcionário: ");
      const employeeCpf = this.prompt("CPF do funcionário: ");
      const employeeAge = parseInt(this.prompt("Idade do cliente: "));

      const transportSeat = this.prompt("Assento do transporte: ");
      const transportNumberOfSeats = parseInt(
        this.prompt("Número de assentos: ")
      );
      const transportSerialNumber = parseInt(this.prompt("Número de série: "));
      const ticketPrice = parseInt(this.prompt("Preço do ticket: "));

      const client: Client = this.control.getNewClient(
        clientName,
        clientCpf,
        clientAge
      );
      const employee: Employee = this.control.getNewEmployee(
        employeeName,
        employeeCpf,
        employeeAge
      );
      const transport: Transport = this.control.getNewTransport(
        transportSeat,
        transportNumberOfSeats,
        transportSerialNumber
      );

      const ticket: Ticket = new Ticket(ticketPrice, client, transport);

      // Instancia a classe Sale com um array contendo o ticket e o funcionário
      const sale: Sale = new Sale([ticket], employee);

      // Define o status da venda usando o método setStatus
      sale.setStatus(SaleStatus.REALIZADA);

      this.control.db.insertNewSale(sale);

      console.log("\nVenda registrada com sucesso!");
      console.log(`Status da venda: ${sale.getStatus()}`);

      const choice = this.prompt(
        "Deseja registrar outra venda? (S/N): "
      ).toUpperCase();
      continues = choice === "S";
    }
  }
}*/
