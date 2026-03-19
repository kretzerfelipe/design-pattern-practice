import type { Order } from "../entities/order.js";
import type { Stock } from "../entities/stock.js";
import { BuyStrategy } from "./buy-strategy.js";
import type { OrderStrategy } from "./order-strategy.js";

export class SellStrategy implements OrderStrategy {
  public processMatch(stock: Stock, currentOrder: Order): void {
    const orders = stock.getOrders();

    const equalPriceBuy = orders.find(
      (o) =>
        o.getStrategy() instanceof BuyStrategy &&
        o.getPrice() === currentOrder.getPrice()
    );

    if (!equalPriceBuy) {
      return;
    }

    console.log(`venda por R$${currentOrder.getPrice()}`);
    stock.executeTrade(currentOrder, equalPriceBuy);
  }
}
