import type { Observer } from "../strategies/observer.js";
import type { Order } from "./order.js";

export class Stock {
  private symbol: string;
  private currentPrice: number;
  private orders: Order[] = [];
  private observers: Observer[] = [];

  constructor(symbol: string, initialPrice: number) {
    this.symbol = symbol;
    this.currentPrice = initialPrice;
  }

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this, this.currentPrice);
    }
  }

  public addOrder(order: Order): void {
    this.orders.push(order);
    this.processMatch(order);
  }

  private processMatch(order: Order): void {
    order.executeMatch(this);
  }

  public executeTrade(order1: Order, order2: Order): void {
    this.orders = this.orders.filter((o) => o !== order1 && o !== order2);

    this.currentPrice = order1.getPrice();

    this.notifyObservers();
  }

  public getOrders(): Order[] {
    return this.orders;
  }
  public getSymbol(): string {
    return this.symbol;
  }
  public getCurrentPrice(): number {
    return this.currentPrice;
  }
}
