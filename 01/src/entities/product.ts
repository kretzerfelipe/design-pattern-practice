export class Product {
  constructor(
    private readonly _id: string,
    private readonly _name: string,
    private readonly _price: number,
    private readonly _weightInGrams: number
  ) {
    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

  get weightInGrams(): number {
    return this._weightInGrams;
  }

  private validate(): void {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }
    if (this._name.length === 0) {
      throw new Error("Name is required");
    }
    if (this._price <= 0) {
      throw new Error("Price must be greater than zero");
    }
    if (this.weightInGrams <= 0) {
      throw new Error("WeightInGrams must be greater than zero");
    }
  }
}
