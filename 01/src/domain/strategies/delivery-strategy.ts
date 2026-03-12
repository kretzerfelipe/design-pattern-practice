export interface DeliveryStrategy {
  calculate(weight: number): number;
}
