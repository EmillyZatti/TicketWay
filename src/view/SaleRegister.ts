import * as PromptSync from "prompt-sync";
import MainController from "../control/MainController";
import Sale from "../service/Sale";
import Client from "../model/Client";
import Transport from "../model/Transport";
import Ticket from "../model/Ticket";
import Employee from "../model/Employee";
import { SaleStatus } from "../enuns/SaleStatus";
import ClientRegister from "./ClientRegister";
import type { ITicket } from "../interfaces/ITicket";

export default class SaleRegister {
  private prompt = PromptSync();
  private control!: MainController;
  private clientRegister: ClientRegister = new ClientRegister(this.control);

  public constructor(control: MainController) {
    this.control = control;
  }

  public addSale(): void {
    let sale = this.control.getNewSale();
    sale.setClient(this.addClient());
  }
}
