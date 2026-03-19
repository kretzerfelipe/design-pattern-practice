import { jest, describe, it, expect } from "@jest/globals";
import type { Investor } from "../../src/entities/investor.js";
import type { OrderStrategy } from "../../src/strategies/order-strategy.js";
import { Order } from "../../src/entities/order.js";
import type { Stock } from "../../src/entities/stock.js";

describe("Order Unit Tests", () => {
  it("deve inicializar e retornar as propriedades corretamente", () => {
    const mockInvestor = {} as Investor;
    const mockStrategy = {} as OrderStrategy;

    const order = new Order(mockInvestor, 24.0, mockStrategy);

    expect(order.getPrice()).toBe(24.0);
    expect(order.getInvestor()).toBe(mockInvestor);
    expect(order.getStrategy()).toBe(mockStrategy);
  });

  it("deve delegar a execução do match", () => {
    const mockInvestor = {} as Investor;
    const mockStock = {} as Stock;

    const mockStrategy: OrderStrategy = {
      processMatch: jest.fn(),
    };

    const order = new Order(mockInvestor, 24.0, mockStrategy);
    order.executeMatch(mockStock);

    expect(mockStrategy.processMatch).toHaveBeenCalledTimes(1);
    expect(mockStrategy.processMatch).toHaveBeenCalledWith(mockStock, order);
  });
});
