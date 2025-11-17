import Database from "../db/Database";
import Bus from "../model/Bus";
import Client from "../model/Client";
import Employee from "../model/Employee";
import Plane from "../model/Plane";
import Ticket from "../model/Ticket";
import type Transport from "../model/Transport";
import Sale from "../service/Sale";
import SalePriceCalculator from "../service/SalePriceCalculator";
import MainScreen from "../view/MainScreen";

export default class MainController {
  public db: Database = new Database();
  public salePriceCalculator = new SalePriceCalculator();

  constructor() {
    new MainScreen(this);
  }

  public getNewClient(id: number, name: string, cpf: string, age: number) {
    return new Client(id, name, cpf, age);
  }

  public getNewBus(seats: number[]) {
    return new Bus(seats);
  }

  public getNewPlane(seats: number[]) {
    return new Plane(seats);
  }

  public getNewSale() {
    return new Sale(this.salePriceCalculator);
  }

  public getNewEmployee(id: number, name: string, cpf: string, age: number) {
    return new Client(id, name, cpf, age);
  }

  public getNewTicket(price: number, client: Client, transport: Transport) {
    return new Ticket(price, client, transport);
  }
}
