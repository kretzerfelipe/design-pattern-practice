import type { Observer } from "../strategies/observer.js";
import type { Stock } from "./stock.js";

export class Investor implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(stock: Stock, newPrice: number): void {
    console.log(
      `Notificação para usuário ${
        this.name
      }. A ação ${stock.getSymbol()} agora tem valor R$${newPrice.toFixed(2)}`
    );
  }

  public getName(): string {
    return this.name;
  }
}
