import { describe, it, expect } from "@jest/globals";
import { PersianaSolarius } from "../../src/lib/PersianaSolarius.js";

describe("PersianaSolarius Unit Tests", () => {
  it("deve inicializar aberta", () => {
    const persiana = new PersianaSolarius();

    expect(persiana.estaAberta()).toBe(true);
  });

  it("deve descer a persiana", () => {
    const persiana = new PersianaSolarius();

    persiana.descerPersiana();

    expect(persiana.estaAberta()).toBe(false);
  });

  it("deve subir a persiana", () => {
    const persiana = new PersianaSolarius();
    persiana.descerPersiana();

    persiana.subirPersiana();

    expect(persiana.estaAberta()).toBe(true);
  });

  it("deve manter estado aberto após subir novamente", () => {
    const persiana = new PersianaSolarius();

    persiana.subirPersiana();

    expect(persiana.estaAberta()).toBe(true);
  });

  it("deve manter estado fechado após descer novamente", () => {
    const persiana = new PersianaSolarius();
    persiana.descerPersiana();

    persiana.descerPersiana();

    expect(persiana.estaAberta()).toBe(false);
  });

  it("deve permitir múltiplos ciclos de abertura e fechamento", () => {
    const persiana = new PersianaSolarius();

    persiana.descerPersiana();
    expect(persiana.estaAberta()).toBe(false);

    persiana.subirPersiana();
    expect(persiana.estaAberta()).toBe(true);

    persiana.descerPersiana();
    expect(persiana.estaAberta()).toBe(false);

    persiana.subirPersiana();
    expect(persiana.estaAberta()).toBe(true);
  });
});
