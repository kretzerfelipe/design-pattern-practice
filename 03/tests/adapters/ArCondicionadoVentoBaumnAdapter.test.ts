import { describe, it, expect } from "@jest/globals";
import { ArCondicionadoVentoBaumnAdapter } from "../../src/adapters/ArCondicionadoVentoBaumnAdapter.js";
import { ArCondicionadoVentoBaumn } from "../../src/lib/ArCondicionadoVentoBaumn.js";

describe("ArCondicionadoVentoBaumnAdapter Unit Tests", () => {
  it("deve inicializar desligado com temperatura 24", () => {
    const ac = new ArCondicionadoVentoBaumn();
    const adapter = new ArCondicionadoVentoBaumnAdapter(ac);

    expect(adapter.isOn()).toBe(false);
    expect(adapter.getTemperature()).toBe(24);
  });

  it("deve ligar o aparelho", () => {
    const ac = new ArCondicionadoVentoBaumn();
    const adapter = new ArCondicionadoVentoBaumnAdapter(ac);

    adapter.turnOn();

    expect(adapter.isOn()).toBe(true);
  });

  it("deve desligar o aparelho", () => {
    const ac = new ArCondicionadoVentoBaumn();
    const adapter = new ArCondicionadoVentoBaumnAdapter(ac);
    adapter.turnOn();

    adapter.turnOff();

    expect(adapter.isOn()).toBe(false);
  });

  it("deve definir temperatura e ligar o aparelho", () => {
    const ac = new ArCondicionadoVentoBaumn();
    const adapter = new ArCondicionadoVentoBaumnAdapter(ac);

    adapter.setTemperature(25);

    expect(adapter.getTemperature()).toBe(25);
    expect(adapter.isOn()).toBe(true);
  });

  it("deve definir temperatura quando já está ligado", () => {
    const ac = new ArCondicionadoVentoBaumn();
    const adapter = new ArCondicionadoVentoBaumnAdapter(ac);
    adapter.turnOn();

    adapter.setTemperature(28);

    expect(adapter.getTemperature()).toBe(28);
  });

  it("deve aceitar temperaturas válidas", () => {
    const ac = new ArCondicionadoVentoBaumn();
    const adapter = new ArCondicionadoVentoBaumnAdapter(ac);

    adapter.setTemperature(15);
    expect(adapter.getTemperature()).toBe(15);

    adapter.setTemperature(35);
    expect(adapter.getTemperature()).toBe(35);

    adapter.setTemperature(20);
    expect(adapter.getTemperature()).toBe(20);
  });

  it("deve lançar erro ao definir temperatura inválida", () => {
    const ac = new ArCondicionadoVentoBaumn();
    const adapter = new ArCondicionadoVentoBaumnAdapter(ac);

    expect(() => adapter.setTemperature(14)).toThrow(
      "Temperatura deve ser entre 15 e 35"
    );
    expect(() => adapter.setTemperature(36)).toThrow(
      "Temperatura deve ser entre 15 e 35"
    );
  });
});
