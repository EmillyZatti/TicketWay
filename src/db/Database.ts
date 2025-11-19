import type City from "../model/City";
import type Client from "../model/Client";
import type Employee from "../model/Employee";
import type Ticket from "../model/Ticket";
import type Transport from "../model/Transport";
import type Sale from "../service/Sale";

export default class Database {
  private transportDB: Transport[] = [];
  private clientDB: Client[] = [];
  private employeeDB: Employee[] = [];
  private saleDB: Sale[] = [];
  private ticketsDB: Ticket[] = [];
  private cityDB: City[] = [];

  public addNewClient(client: Client) {
    this.clientDB.push(client);
  }

  public getClient(id: number): Client {
    if (!this.clientDB[id]) {
      throw new Error(`Cliente Inexistente`);
    }

    return this.clientDB[id];
  }

  public getAllClients(): Client[] {
    return this.clientDB;
  }

  public addNewEmployee(employee: Employee) {
    this.employeeDB.push(employee);
  }

  public getEmployee(id: number): Employee {
    return this.employeeDB[id];
  }

  public getAllEmployees(): Employee[] {
    return this.employeeDB;
  }

  public addNewTransport(transport: Transport) {
    this.transportDB.push(transport);
  }

  public getAllTransport(): Transport[] {
    return this.transportDB;
  }

  public addNewSale(sale: Sale) {
    this.saleDB.push(sale);
  }

  public getSale(index: number): Sale {
    return this.saleDB[index]!;
  }

  public getSales(): Sale[] {
    return this.saleDB;
  }

  public getTickets(): Ticket[] {
    return this.ticketsDB;
  }

  public getCity(index: number): City {
    return this.cityDB[index];
  }

  public addNewCity(city: City) {
    this.cityDB.push(city);
  }

  public getAllCities(): City[] {
    return this.cityDB;
  }
}
