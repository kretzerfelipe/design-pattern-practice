import { jest, describe, it, expect } from "@jest/globals";
import { BuyStrategy } from "../../src/strategies/buy-strategy.js";
import { Order } from "../../src/entities/order.js";
import type { Investor } from "../../src/entities/investor.js";
import type { Stock } from "../../src/entities/stock.js";
import { SellStrategy } from "../../src/strategies/sell-strategy.js";

describe("BuyStrategy Unit Tests", () => {
  it("não deve executar trade", () => {
    const sellStrategy = new SellStrategy();
    const currentOrder = new Order({} as Investor, 24.0, sellStrategy);

    const mockStock = {
      getOrders: jest.fn().mockReturnValue([]),
      executeTrade: jest.fn(),
    } as unknown as Stock;

    sellStrategy.processMatch(mockStock, currentOrder);

    expect(mockStock.executeTrade).not.toHaveBeenCalled();
  });

  it("deve executar trade", () => {
    const sellStrategy = new SellStrategy();
    const buyStrategy = new BuyStrategy();

    const currentBuyOrder = new Order({} as Investor, 24.0, sellStrategy);
    const waitingSellOrder = new Order({} as Investor, 24.0, buyStrategy);

    const mockStock = {
      getOrders: jest.fn().mockReturnValue([waitingSellOrder]),
      executeTrade: jest.fn(),
    } as unknown as Stock;

    jest.spyOn(console, "log").mockImplementation(() => {});

    sellStrategy.processMatch(mockStock, currentBuyOrder);

    expect(mockStock.executeTrade).toHaveBeenCalledTimes(1);
    expect(mockStock.executeTrade).toHaveBeenCalledWith(
      currentBuyOrder,
      waitingSellOrder
    );
  });
});
