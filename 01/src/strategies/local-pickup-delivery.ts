import type { DeliveryStrategy } from "./delivery-strategy.js";

export class LocalPickupDelivery implements DeliveryStrategy {
  calculate(): number {
    return 0;
  }
}
