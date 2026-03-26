import { describe, it, expect } from "@jest/globals";
import { LampadaShoyuMi } from "../../src/lib/LampadaShoyuMi.js";

describe("LampadaShoyuMi Unit Tests", () => {
  it("deve inicializar desligada", () => {
    const lampada = new LampadaShoyuMi();

    expect(lampada.estaLigada()).toBe(false);
  });

  it("deve ligar a lâmpada", () => {
    const lampada = new LampadaShoyuMi();

    lampada.ligar();

    expect(lampada.estaLigada()).toBe(true);
  });

  it("deve desligar a lâmpada", () => {
    const lampada = new LampadaShoyuMi();
    lampada.ligar();

    lampada.desligar();

    expect(lampada.estaLigada()).toBe(false);
  });

  it("deve manter estado ligado após ligar novamente", () => {
    const lampada = new LampadaShoyuMi();
    lampada.ligar();

    lampada.ligar();

    expect(lampada.estaLigada()).toBe(true);
  });

  it("deve manter estado desligado após desligar novamente", () => {
    const lampada = new LampadaShoyuMi();

    lampada.desligar();

    expect(lampada.estaLigada()).toBe(false);
  });
});
