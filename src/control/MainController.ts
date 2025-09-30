import Database from "../db/Database";
import { SaleStatus } from "../enuns/SaleStatus";
import Bus from "../model/Bus";
import Client from "../model/Client";
import Employee from "../model/Employee";
import Plane from "../model/Plane";
import Ticket from "../model/Ticket";
import Sale from "../service/Sale";
import MainScreen from "../view/MainScreen";

export default class MainController {
  public db: Database = new Database();

  constructor() {
    new MainScreen(this);
  }

  public getNewClient(name: string, cpf: string, age: number) {
    return new Client(name, cpf, age);
  }

  public getNewBus(seats: number[]) {
    return new Bus(seats);
  }

  public getNewPlane(seats: number[]) {
    return new Plane(seats);
  }

  public getNewSale(tickets: Ticket[], employee: Employee, status: SaleStatus) {
    return new Sale(tickets, employee);
  }

  public getNewEmployee(name: string, cpf: string, age: number) {
    return new Client(name, cpf, age);
  }
}
