import { describe, it, expect } from "@jest/globals";
import { LampadaPhellipes } from "../../src/lib/LampadaPhellipes.js";

describe("LampadaPhellipes Unit Tests", () => {
  it("deve inicializar com intensidade 0", () => {
    const lampada = new LampadaPhellipes();

    expect(lampada.getIntensidade()).toBe(0);
  });

  it("deve aumentar a intensidade", () => {
    const lampada = new LampadaPhellipes();

    lampada.setIntensidade(50);

    expect(lampada.getIntensidade()).toBe(50);
  });

  it("deve estabelecer intensidade máxima em 100", () => {
    const lampada = new LampadaPhellipes();

    lampada.setIntensidade(100);

    expect(lampada.getIntensidade()).toBe(100);
  });

  it("deve lançar erro ao definir intensidade maior que 100", () => {
    const lampada = new LampadaPhellipes();

    expect(() => lampada.setIntensidade(101)).toThrow(
      "O valor da intensidade deve ser entre 0 e 100"
    );
  });

  it("deve lançar erro ao definir intensidade menor que 0", () => {
    const lampada = new LampadaPhellipes();

    expect(() => lampada.setIntensidade(-1)).toThrow(
      "O valor da intensidade deve ser entre 0 e 100"
    );
  });

  it("deve aceitar valor mínimo de intensidade", () => {
    const lampada = new LampadaPhellipes();

    lampada.setIntensidade(0);

    expect(lampada.getIntensidade()).toBe(0);
  });
});
