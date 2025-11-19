import { CalculatorOperation } from "../enuns/CalculatorOperation";
import type { SaleStatus } from "../enuns/SaleStatus";
import type Client from "../model/Client";
import type Employee from "../model/Employee";
import type Ticket from "../model/Ticket";
import type SalePriceCalculator from "./SalePriceCalculator";

export default class Sale {
  private saleItens: Ticket[] = [];
  private ticketsQuantity: number[] = [];
  private client!: Client;
  private employee!: Employee;
  private status!: SaleStatus;
  private calculator: SalePriceCalculator;
  private salePrice: number = 0;

  constructor(calculator: SalePriceCalculator) {
    this.calculator = calculator;
  }

  public addTicketOnSale(tickets: Ticket, quantity: number): void {
    this.saleItens.push(tickets);
    this.ticketsQuantity.push(quantity);
    const price = this.calculator.calculate(
      tickets,
      quantity,
      CalculatorOperation.ADICAO
    );
    this.salePrice += price;
  }

  public removeSaleItens(index: number) {
    console.log(`Item ${index} removido`);
    this.saleItens.splice(index, 1);
    this.ticketsQuantity.splice(index, 1);
  }

  public changeSaleQuantity(index: number, quantity: number): void {
    this.salePrice += this.calculator.calculate(
      this.saleItens[index]!,
      this.ticketsQuantity[index]!,
      CalculatorOperation.SUBTRACAO
    );
    this.ticketsQuantity[index] = quantity;
    this.salePrice += this.calculator.calculate(
      this.saleItens[index]!,
      quantity,
      CalculatorOperation.ADICAO
    );
  }

  public getSaleItens(): Ticket[] {
    return this.saleItens;
  }

  public getTicketQuantity(): number[] {
    return this.ticketsQuantity;
  }

  public getClient(): Client {
    return this.client;
  }

  public setClient(client: Client): void {
    this.client = client;
  }

  public getEmployee(): Employee {
    return this.employee;
  }

  public setEmployee(employee: Employee): void {
    this.employee = employee;
  }

  public setStatus(status: SaleStatus): void {
    this.status = status;
  }

  public getStatus(): SaleStatus {
    return this.status;
  }

  public toString(): String {
    let saleItensData = "";
    let saleData = `
    Vendedor: 
              ${this.employee.toString()}
    
    Cliente:
              ${this.client.toString()}
    Valor Total Compra: ${this.salePrice}
    Produtos Vendidos:`;

    for (let i = 0; i < this.saleItens.length; i++) {
      saleItensData +=
        "Origem: " +
        this.saleItens[i].getOrigin() +
        " Destino: " +
        this.saleItens[i].getDestination() +
        "\n";
    }

    return saleData + saleItensData;
  }
}
