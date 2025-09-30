import * as PromptSync from "prompt-sync";
import MainController from "../control/MainController";

export default class TransportRegister {
  private prompt = PromptSync();
  private control: MainController;

  constructor(control: MainController) {
    this.control = new MainController();
  }

  public addTransport(): void {
    let seats: number[] = [];
    let seatsQuantity = parseInt(
      this.prompt("Digite a quantidade de assentos do transporte:")
    );
    for (let i = 0; i <= seatsQuantity; i++) {
      seats.push(i);
    }
    console.log("1- Ônibus\n2- Avião");
    switch (this.prompt("Escolha o tipo de transporte: ")) {
      case "1":
        let bus = this.control.getNewBus(seats);
        break;
      case "2":
        let plane = this.control.getNewPlane(seats);
        break;
      default:
        console.log("Tipo inválido!");
        return;
    }
  }
}
