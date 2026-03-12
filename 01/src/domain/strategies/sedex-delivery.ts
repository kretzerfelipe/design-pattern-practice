import type { DeliveryStrategy } from "./delivery-strategy.js";

export class PacDelivery implements DeliveryStrategy {
  calculate(weight: number): number {
    if (weight < 500) {
      return 12.5;
    }

    if (weight >= 500 && weight < 1000) {
      return 20;
    }

    return 1;
  }
}
