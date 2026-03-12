import { Product } from "../../src/entities/product.js";

describe("Product Entity", () => {
  it("should create a valid product", () => {
    const product = new Product("1", "Clean Code", 50, 500);
    expect(product.id).toBe("1");
    expect(product.name).toBe("Clean Code");
    expect(product.price).toBe(50);
  });

  it("should throw error if price is zero or negative", () => {
    expect(() => new Product("1", "Book", 0, 500)).toThrow(
      "Price must be greater than zero"
    );
    expect(() => new Product("1", "Book", -10, 500)).toThrow(
      "Price must be greater than zero"
    );
  });

  it("should throw error if weight is zero or negative", () => {
    expect(() => new Product("1", "Book", 50, 0)).toThrow(
      "WeightInGrams must be greater than zero"
    );
  });

  it("should throw error if name is empty", () => {
    expect(() => new Product("1", "", 50, 500)).toThrow("Name is required");
  });
});
