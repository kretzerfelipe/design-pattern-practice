import { describe, it, expect } from "@jest/globals";
import { ArCondicionadoGellaKaza } from "../../src/lib/ArCondicionadoGellaKaza.js";

describe("ArCondicionadoGellaKaza Unit Tests", () => {
  it("deve inicializar desligado com temperatura 28", () => {
    const ac = new ArCondicionadoGellaKaza();

    expect(ac.estaLigado()).toBe(false);
    expect(ac.getTemperatura()).toBe(28);
  });

  it("deve ligar o aparelho", () => {
    const ac = new ArCondicionadoGellaKaza();

    ac.ativar();

    expect(ac.estaLigado()).toBe(true);
  });

  it("deve desligar o aparelho", () => {
    const ac = new ArCondicionadoGellaKaza();
    ac.ativar();

    ac.desativar();

    expect(ac.estaLigado()).toBe(false);
  });

  it("deve aumentar a temperatura", () => {
    const ac = new ArCondicionadoGellaKaza();

    ac.aumentarTemperatura();

    expect(ac.getTemperatura()).toBe(29);
  });

  it("deve diminuir a temperatura", () => {
    const ac = new ArCondicionadoGellaKaza();

    ac.diminuirTemperatura();

    expect(ac.getTemperatura()).toBe(27);
  });

  it("deve lançar erro ao aumentar temperatura acima de 35", () => {
    const ac = new ArCondicionadoGellaKaza();

    for (let i = 0; i < 7; i++) {
      ac.aumentarTemperatura();
    }

    expect(() => ac.aumentarTemperatura()).toThrow(
      "Limite de temperatura atingido 35"
    );
  });

  it("deve lançar erro ao diminuir temperatura abaixo de 15", () => {
    const ac = new ArCondicionadoGellaKaza();

    for (let i = 0; i < 13; i++) {
      ac.diminuirTemperatura();
    }

    expect(() => ac.diminuirTemperatura()).toThrow(
      "Limite de temperatura atingido 15"
    );
  });

  it("deve manter temperatura entre 15 e 35", () => {
    const ac = new ArCondicionadoGellaKaza();

    ac.diminuirTemperatura();
    expect(ac.getTemperatura()).toBe(27);

    ac.aumentarTemperatura();
    ac.aumentarTemperatura();
    expect(ac.getTemperatura()).toBe(29);
  });
});
