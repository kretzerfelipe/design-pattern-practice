import { jest, describe, it, expect, beforeEach } from "@jest/globals";
import { Stock } from "../../src/entities/stock.js";
import type { Observer } from "../../src/strategies/observer.js";
import type { Order } from "../../src/entities/order.js";

describe("Stock Unit Tests", () => {
  let stock: Stock;

  beforeEach(() => {
    stock = new Stock("VALE3", 60.0);
  });

  it("deve retornar o símbolo e o preço atual", () => {
    expect(stock.getSymbol()).toBe("VALE3");
    expect(stock.getCurrentPrice()).toBe(60.0);
  });

  it("deve gerenciar observadores e notificar", () => {
    const mockObserver1: Observer = { update: jest.fn() };
    const mockObserver2: Observer = { update: jest.fn() };

    stock.addObserver(mockObserver1);
    stock.addObserver(mockObserver2);

    stock.notifyObservers();

    expect(mockObserver1.update).toHaveBeenCalledWith(stock, 60.0);
    expect(mockObserver2.update).toHaveBeenCalledWith(stock, 60.0);

    stock.removeObserver(mockObserver1);
    stock.notifyObservers();

    expect(mockObserver1.update).toHaveBeenCalledTimes(1);
    expect(mockObserver2.update).toHaveBeenCalledTimes(2);
  });

  it("deve adicionar ordem à lista e mandar processar (Strategy Pattern)", () => {
    const mockOrder = {
      executeMatch: jest.fn(),
    } as unknown as Order;

    stock.addOrder(mockOrder);

    expect(stock.getOrders().length).toBe(1);
    expect(mockOrder.executeMatch).toHaveBeenCalledWith(stock);
  });

  it("deve executar o trade, atualizar preço, limpar ordens e notificar", () => {
    const notifySpy = jest.spyOn(stock, "notifyObservers");

    const mockOrder1 = { getPrice: () => 61.0 } as Order;
    const mockOrder2 = { getPrice: () => 61.0 } as Order;

    stock["orders"] = [mockOrder1, mockOrder2];

    stock.executeTrade(mockOrder1, mockOrder2);

    expect(stock.getOrders().length).toBe(0);
    expect(stock.getCurrentPrice()).toBe(61.0);
    expect(notifySpy).toHaveBeenCalledTimes(1);
  });
});
