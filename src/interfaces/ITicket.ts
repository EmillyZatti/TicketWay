import City from "../model/City";

export interface ITicket {
  getOrigin(): City;
  setOrigin(origin: City): void;
  getDestination(): City;
  setDestination(destination: City): void;
  getDate(): Date;
  setDate(date: Date): void;
  getPrice(): number;
  setPrice(price: number): void;
  getInfo(): string;
}
