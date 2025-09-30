import type Client from "./Client";
import type Transport from "./Transport";

export default class Ticket {
  private price!: number;
  client: Client;
  transport: Transport;

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
}
