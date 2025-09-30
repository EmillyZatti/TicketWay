import type Client from "../model/Client";
import type Transport from "../model/Transport";
import type Sale from "../service/Sale";

export default class Database {
  private transportDB: Transport[] = [];
  private clientDB: Client[] = [];
  private saleDB: Sale[] = [];

  public insertNewClient(client: Client) {
    this.clientDB.push(client);
  }

  public getClient(id: number): Client | undefined {
    return this.clientDB[id];
  }

  public getAllClients(): Client[] {
    return this.clientDB;
  }

  public insertNewTransport(transport: Transport) {
    this.transportDB.push(transport);
  }

  public getAllTransport(): Transport[] {
    return this.transportDB;
  }

  public insertNewSale(sale: Sale) {
    this.saleDB.push(sale);
  }
}
