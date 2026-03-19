import type { Order } from "../entities/order.js";
import type { Stock } from "../entities/stock.js";

export interface OrderStrategy {
  processMatch(stock: Stock, currentOrder: Order): void;
}
