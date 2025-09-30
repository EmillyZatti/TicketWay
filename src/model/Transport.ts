export default class Transport {
  private seats!: number[];

  constructor(seats: number[]) {
    this.seats = seats;
  }

  public getSeat(index: number): number {
    if (this.seats[index]) return this.seats[index];
    else return -1;
  }

  public setSeat(seat: number): void {
    this.seats.push(seat);
  }

  public getNumberOfSeats(): number {
    return this.seats.length;
  }
}
