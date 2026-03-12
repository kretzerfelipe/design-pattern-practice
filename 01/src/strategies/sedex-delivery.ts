import type { DeliveryStrategy } from "./delivery-strategy.js";

export class SedexDelivery implements DeliveryStrategy {
  calculate(weightInGrams: number): number {
    const valuePerAdditional100Grams = 1.5;
    const isInFirstWeightRange = weightInGrams < 500;
    const isInSecondWeightRange = weightInGrams >= 500 && weightInGrams < 1000;

    if (isInFirstWeightRange) {
      return 12.5;
    }

    if (isInSecondWeightRange) {
      return 20;
    }

    const additionalWeight = weightInGrams - 1000;

    const additionalPayment =
      Math.ceil(additionalWeight / 100) * valuePerAdditional100Grams;

    return 46.5 + additionalPayment;
  }
}
