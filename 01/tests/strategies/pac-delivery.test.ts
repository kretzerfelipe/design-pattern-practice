import { PacDelivery } from "../../src/strategies/pac-delivery.js";

describe("PacDelivery", () => {
  const strategy = new PacDelivery();

  it("should return 10 for weight under 1000g", () => {
    expect(strategy.calculate(500)).toBe(10);
    expect(strategy.calculate(999)).toBe(10);
  });

  it("should return 15 for weight between 1000g and 2000g", () => {
    expect(strategy.calculate(1000)).toBe(15);
    expect(strategy.calculate(2000)).toBe(15);
  });

  it("should throw an error for weight above 2000g", () => {
    expect(() => strategy.calculate(2001)).toThrow(
      "WeightInGrams not supported"
    );
  });
});
