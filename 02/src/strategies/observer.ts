import type { Stock } from "../entities/stock.js";

export interface Observer {
  update(stock: Stock, newPrice: number): void;
}
