export class Product {
  constructor(
    private readonly _id: string,
    private readonly _name: string,
    private readonly _price: number,
    private readonly _weight: number,
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

  get weight(): number {
    return this._weight;
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
    if (this.weight <= 0) {
      throw new Error("Weight must be greater than zero");
    }
  }
}
