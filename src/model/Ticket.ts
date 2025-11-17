import type { ITicket } from "../interfaces/ITicket";
import type Client from "./Client";
import type Transport from "./Transport";

export default class Ticket implements ITicket {
  id!: number;
  origin!: string;
  destination!: string;
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

  public getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  getOrigin(): string {
    return this.origin;
  }

  setOrigin(origin: string): void {
    this.origin = origin;
  }

  getDestination(): string {
    return this.destination;
  }

  setDestination(destination: string): void {
    this.destination = destination;
  }

  getDate(): Date {
    return this.date;
  }

  setDate(date: Date): void {
    this.date = date;
  }
}
