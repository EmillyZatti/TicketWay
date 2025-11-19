import type { ITicket } from "../interfaces/ITicket";
import Client from "./Client";
import Transport from "./Transport";
import City from "./City";

export default class Ticket implements ITicket {
  origin!: City;
  destination!: City;
  date!: Date;
  price: number;
  client: Client;
  transport: Transport;
  value!: number;
  getInfo(): string {
    return this.getInfo();
  }

  constructor(price: number, client: Client, transport: Transport) {
    this.price = price;
    this.client = client;
    this.transport = transport;
  }

  public getClient(): Client {
    return this.client;
  }

  public setClient(client: Client): void {
    this.client = client;
  }

  public getTansport(): Transport {
    return this.transport;
  }

  public setTransport(transport: Transport): void {
    this.transport = transport;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  getOrigin(): City {
    return this.origin;
  }

  setOrigin(origin: City): void {
    this.origin = origin;
  }

  getDestination(): City {
    return this.destination;
  }

  setDestination(destination: City): void {
    this.destination = destination;
  }

  getDate(): Date {
    return this.date;
  }

  setDate(date: Date): void {
    this.date = date;
  }
}
