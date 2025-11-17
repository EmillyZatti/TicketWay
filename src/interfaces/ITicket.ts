export interface ITicket {
  getId(): number;
  setId(id: number): void;
  getOrigin(): string;
  setOrigin(origin: string): void;
  getDestination(): string;
  setDestination(destination: string): void;
  getDate(): Date;
  setDate(date: Date): void;
  getPrice(): number;
  setPrice(price: number): void;
  getInfo(): string;
}
