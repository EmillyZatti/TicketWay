export interface ITicket {
  id: number;
  origin: string;
  destination: string;
  date: Date;
  price: number;
  getInfo(): string;
}
