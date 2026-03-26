import { describe, it, expect } from "@jest/globals";
import { ArCondicionadoVentoBaumn } from "../../src/lib/ArCondicionadoVentoBaumn.js";

describe("ArCondicionadoVentoBaumn Unit Tests", () => {
  it("deve inicializar desligado com temperatura 24", () => {
    const ac = new ArCondicionadoVentoBaumn();

    expect(ac.estaLigado()).toBe(false);
    expect(ac.getTemperatura()).toBe(24);
  });

  it("deve ligar o aparelho", () => {
    const ac = new ArCondicionadoVentoBaumn();

    ac.ligar();

    expect(ac.estaLigado()).toBe(true);
  });

  it("deve desligar o aparelho", () => {
    const ac = new ArCondicionadoVentoBaumn();
    ac.ligar();

    ac.desligar();

    expect(ac.estaLigado()).toBe(false);
  });

  it("deve definir temperatura quando ligado", () => {
    const ac = new ArCondicionadoVentoBaumn();
    ac.ligar();

    ac.definirTemperatura(25);

    expect(ac.getTemperatura()).toBe(25);
  });

  it("deve lançar erro ao definir temperatura quando desligado", () => {
    const ac = new ArCondicionadoVentoBaumn();

    expect(() => ac.definirTemperatura(25)).toThrow(
      "Para definir a temperatura o aparelho deve estar ligado"
    );
  });

  it("deve lançar erro ao definir temperatura menor que 15", () => {
    const ac = new ArCondicionadoVentoBaumn();
    ac.ligar();

    expect(() => ac.definirTemperatura(14)).toThrow(
      "Temperatura deve ser entre 15 e 35"
    );
  });

  it("deve lançar erro ao definir temperatura maior que 35", () => {
    const ac = new ArCondicionadoVentoBaumn();
    ac.ligar();

    expect(() => ac.definirTemperatura(36)).toThrow(
      "Temperatura deve ser entre 15 e 35"
    );
  });

  it("deve aceitar temperatura mínima válida", () => {
    const ac = new ArCondicionadoVentoBaumn();
    ac.ligar();

    ac.definirTemperatura(15);

    expect(ac.getTemperatura()).toBe(15);
  });

  it("deve aceitar temperatura máxima válida", () => {
    const ac = new ArCondicionadoVentoBaumn();
    ac.ligar();

    ac.definirTemperatura(35);

    expect(ac.getTemperatura()).toBe(35);
  });
});
