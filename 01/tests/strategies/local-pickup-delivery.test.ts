import { LocalPickupDelivery } from "../../src/strategies/local-pickup-delivery.js";

describe("LocalPickupDelivery", () => {
  it("should always return 0 as delivery price", () => {
    const strategy = new LocalPickupDelivery();
    expect(strategy.calculate()).toBe(0);
  });
});
