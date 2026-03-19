import type { OrderStrategy } from "../strategies/order-strategy.js";
import type { Investor } from "./investor.js";
import type { Stock } from "./stock.js";

export class Order {
  private investor: Investor;
  private price: number;
  private strategy: OrderStrategy;

  constructor(investor: Investor, price: number, strategy: OrderStrategy) {
    this.investor = investor;
    this.price = price;
    this.strategy = strategy;
  }

  public executeMatch(stock: Stock): void {
    this.strategy.processMatch(stock, this);
  }

  public getPrice(): number {
    return this.price;
  }
  public getStrategy(): OrderStrategy {
    return this.strategy;
  }
  public getInvestor(): Investor {
    return this.investor;
  }
}
