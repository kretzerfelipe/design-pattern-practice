import type { Order } from "../entities/order.js";
import type { Stock } from "../entities/stock.js";
import type { OrderStrategy } from "./order-strategy.js";
import { SellStrategy } from "./sell-strategy.js";

export class BuyStrategy implements OrderStrategy {
  public processMatch(stock: Stock, currentOrder: Order): void {
    const orders = stock.getOrders();

    const equalPriceBuy = orders.find(
      (o) =>
        o.getStrategy() instanceof SellStrategy &&
        o.getPrice() === currentOrder.getPrice()
    );

    if (!equalPriceBuy) {
      return;
    }

    console.log(`compra por R$${currentOrder.getPrice()}`);
    stock.executeTrade(currentOrder, equalPriceBuy);
  }
}
