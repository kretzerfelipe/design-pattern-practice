import { SedexDelivery } from "../../src/strategies/sedex-delivery.js";

describe("SedexDelivery", () => {
  const strategy = new SedexDelivery();

  it("should return 12.5 for weight under 500g", () => {
    expect(strategy.calculate(400)).toBe(12.5);
  });

  it("should return 20 for weight between 500g and 999g", () => {
    expect(strategy.calculate(500)).toBe(20);
    expect(strategy.calculate(999)).toBe(20);
  });

  it("should calculate additional weight correctly for 1250g", () => {
    expect(strategy.calculate(1250)).toBe(51);
  });
});
