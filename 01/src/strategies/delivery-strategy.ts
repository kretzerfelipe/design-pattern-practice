export interface DeliveryStrategy {
  calculate(weightInGrams: number): number;
}
