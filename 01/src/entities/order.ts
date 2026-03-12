import type { DeliveryStrategy } from "../strategies/delivery-strategy.js";
import type { Product } from "./product.js";

export class Order {
  private _products: Product[] = [];

  constructor(
    private readonly _id: string,
    private _deliveryStrategy: DeliveryStrategy
  ) {
    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get products(): Product[] {
    return this._products;
  }

  get deliveryStrategy(): DeliveryStrategy {
    return this._deliveryStrategy;
  }

  addProducts(product: Product, amount: number): void {
    if (amount <= 0) {
      throw new Error("Amount must be greater than zero");
    }

    for (let i = 0; i < amount; i++) {
      this._products.push(product);
    }
  }

  getProducts(): Product[] {
    return [...this._products];
  }

  getOrderWeight(): number {
    let orderWeight = 0;

    this._products.forEach((p) => {
      orderWeight += p.weightInGrams;
    });

    return orderWeight;
  }

  calculateDelivery(): number {
    const totalWeight = this.getOrderWeight();
    return this._deliveryStrategy.calculate(totalWeight);
  }

  setDeliveryStrategy(strategy: DeliveryStrategy): void {
    this._deliveryStrategy = strategy;
  }

  private validate(): void {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (!this._deliveryStrategy) {
      throw new Error("DeliveryStrategy is required");
    }
  }
}
