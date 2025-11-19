import PromptSync from "prompt-sync";
import MainController from "../control/MainController";
import ClientRegister from "./ClientRegister";
import EmployeeRegister from "./EmployeeRegister";
import TransportRegister from "./TransportRegister";
import SaleRegister from "./SaleRegister";

export default class MainScreen {
  private control: MainController;
  private clientRegister: ClientRegister;
  private employeeRegister: EmployeeRegister;
  private transportRegister: TransportRegister;
  private saleRegister: SaleRegister;
  private prompt;

  constructor(control: MainController) {
    this.control = control;
    this.clientRegister = new ClientRegister(control);
    this.employeeRegister = new EmployeeRegister(control);
    this.transportRegister = new TransportRegister(control);
    this.saleRegister = new SaleRegister(this.control);
    this.mainMenu();
    this.prompt = PromptSync();
  }

  private mainMenu(): void {
    let continues: boolean = true;

    while (continues) {
      let choice = parseInt(
        this.prompt(
          "Escolha\n 1 - Cadastro de Cliente \n 2 - Cadastro de Colaborador \n 3 - Cadastro de Transporte \n 4 - Registro de Venda"
        )
      );
      switch (choice) {
        case 1:
          this.clientRegister.addClient();

        case 2:
          this.employeeRegister.addEmployee();
        case 3:
          this.transportRegister.addTransport();
      }
    }
  }
}
