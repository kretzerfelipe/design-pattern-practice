import type { DeliveryStrategy } from "./delivery-strategy.js";

export class PacDelivery implements DeliveryStrategy {
  calculate(weight: number): number {
    if (weight < 1000) {
      return 10;
    }

    if (weight <= 2000) {
      return 15;
    }

    throw new Error("Weight not supported");
  }
}
