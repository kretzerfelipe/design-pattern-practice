import { describe, it, expect } from "@jest/globals";
import { PersianaSolarius } from "../../src/lib/PersianaSolarius.js";
import { PersianaSolariusAdapter } from "../../src/adapters/PersianaSolariusAdapter.js";

describe("PersianaSolariusAdapter Unit Tests", () => {
  it("deve inicializar aberta", () => {
    const persiana = new PersianaSolarius();
    const adapter = new PersianaSolariusAdapter(persiana);

    expect(adapter.isOpen()).toBe(true);
  });

  it("deve descer a persiana", () => {
    const persiana = new PersianaSolarius();
    const adapter = new PersianaSolariusAdapter(persiana);

    adapter.lower();

    expect(adapter.isOpen()).toBe(false);
  });

  it("deve subir a persiana", () => {
    const persiana = new PersianaSolarius();
    const adapter = new PersianaSolariusAdapter(persiana);
    adapter.lower();

    adapter.raise();

    expect(adapter.isOpen()).toBe(true);
  });

  it("não deve descer quando já está fechada", () => {
    const persiana = new PersianaSolarius();
    const adapter = new PersianaSolariusAdapter(persiana);
    adapter.lower();

    adapter.lower();

    expect(adapter.isOpen()).toBe(false);
  });

  it("não deve subir quando já está aberta", () => {
    const persiana = new PersianaSolarius();
    const adapter = new PersianaSolariusAdapter(persiana);

    adapter.raise();

    expect(adapter.isOpen()).toBe(true);
  });
});
