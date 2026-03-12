import type { Product } from "./product.js";

export class Order {
  constructor(
    private readonly _id: string,
    private readonly _products: Product[],
    private readonly _deliveryType: string,
  ) {
    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get products(): Product[] {
    return this._products;
  }

  get deliveryType(): string {
    return this._deliveryType;
  }

  private validate(): void {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._products.length === 0) {
      throw new Error("Products are required");
    }
  }
}
