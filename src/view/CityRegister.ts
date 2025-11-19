import PromptSync from "prompt-sync";
import MainController from "../control/MainController";

export default class CityRegister {
  private prompt;
  private control: MainController;

  constructor(control: MainController) {
    this.control = control;
    this.prompt = PromptSync();
  }

  public addCity(): void {
    let cities = this.control.db.getAllCities();
    let aux = "S";
    console.log("Cidades Cadastradas");
    for (let i = 0; i < cities.length; i++) {
      console.log(`ID: ${i} Nome: ${cities[i].getName()}`);
    }

    do {
      let name = this.prompt("Digite o nome da cidade que deseja cadastrar:");
      let city = this.control.getNewCity(name);
      this.control.db.addNewCity(city);
      aux = this.prompt(
        "Deseja cadastrar mais alguma cidade?: \nS = sim \nN = Nao"
      );
    } while (aux === "S");
  }
}
