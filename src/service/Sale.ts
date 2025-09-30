import type { SaleStatus } from "../enuns/SaleStatus";
import type Employee from "../model/Employee";
import type Ticket from "../model/Ticket";

export default class Sale {
  private tickets!: Ticket[];
  private employee!: Employee;
  private status!: SaleStatus;

  constructor(tickets: Ticket[], employee: Employee) {
    this.tickets = tickets;
    this.employee = employee;
  }

  public setStatus(status: SaleStatus): void {
    this.status = status;
  }

  public getStatus(): SaleStatus {
    return this.status;
  }
}
