import { jest, describe, it, expect, beforeEach } from "@jest/globals";
import { Order } from "../../src/entities/order.js";
import { Product } from "../../src/entities/product.js";
import type { DeliveryStrategy } from "../../src/strategies/delivery-strategy.js";

describe("Order Entity Unit Tests", () => {
  let mockStrategy: DeliveryStrategy;
  let product1: Product;
  let product2: Product;

  beforeEach(() => {
    // Resetando o mock e os produtos antes de cada teste
    mockStrategy = {
      calculate: jest.fn<(weight: number) => number>().mockReturnValue(15),
    };
    product1 = new Product("p1", "Clean Code", 50, 500); // 500g
    product2 = new Product("p2", "Refactoring", 60, 300); // 300g
  });

  it("should add products correctly using amount", () => {
    const order = new Order("ord_001", mockStrategy);
    order.addProducts(product1, 3);

    expect(order.getProducts().length).toBe(3);
    expect(order.getProducts()[0]).toBe(product1);
  });

  it("should throw error when adding product with zero or negative amount", () => {
    const order = new Order("ord_001", mockStrategy);
    expect(() => order.addProducts(product1, 0)).toThrow(
      "Amount must be greater than zero"
    );
  });

  it("should calculate total order weight correctly", () => {
    const order = new Order("ord_001", mockStrategy);
    order.addProducts(product1, 2); // 1000g
    order.addProducts(product2, 1); // 300g

    expect(order.getOrderWeight()).toBe(1300);
  });

  it("should delegate delivery calculation to the strategy with total weight", () => {
    const order = new Order("ord_001", mockStrategy);
    order.addProducts(product1, 2); // 1000g

    const deliveryCost = order.calculateDelivery();

    // Verifica se o resultado veio do mock
    expect(deliveryCost).toBe(15);
    // Verifica se a Strategy recebeu o peso correto (1000)
    expect(mockStrategy.calculate).toHaveBeenCalledWith(1000);
  });

  it("should allow changing strategy and reflect on calculation", () => {
    const order = new Order("ord_001", mockStrategy);
    order.addProducts(product1, 1);

    // Nova strategy mockada
    const newStrategy: DeliveryStrategy = {
      calculate: jest.fn<(w: number) => number>().mockReturnValue(50),
    };

    order.setDeliveryStrategy(newStrategy);

    expect(order.calculateDelivery()).toBe(50);
    expect(newStrategy.calculate).toHaveBeenCalledWith(500);
  });
});
