import type { DeliveryStrategy } from "./delivery-strategy.js";

export class PacDelivery implements DeliveryStrategy {
  calculate(weightInGrams: number): number {
    const isInFirstWeightRange = weightInGrams < 1000;
    const isInSecondWeightRange = weightInGrams <= 2000;

    let finalDeliveryPrice;
    if (isInFirstWeightRange) {
      finalDeliveryPrice = 10;
      return finalDeliveryPrice;
    }

    if (isInSecondWeightRange) {
      let finalDeliveryPrice = 15;
      return finalDeliveryPrice;
    }

    throw new Error("WeightInGrams not supported");
  }
}
