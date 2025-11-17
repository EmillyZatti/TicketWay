import { CalculatorOperation } from "../enuns/CalculatorOperation";
import type Ticket from "../model/Ticket";

export default class SalePriceCalculator {
  private price: number = 0;
  public calculate(
    idTickets: Ticket,
    quantity: number,
    operation: string
  ): number {
    if (operation === CalculatorOperation.ADICAO) {
      this.price = idTickets.getPrice() * quantity;
      console.log(`Adição: ${this.price}`);
      return this.price;
    }

    if (operation === CalculatorOperation.SUBTRACAO) {
      this.price = -idTickets.getPrice() * quantity;
      console.log(`Subtracao: ${this.price}`);
      return this.price;
    }

    return 0;
  }
}
