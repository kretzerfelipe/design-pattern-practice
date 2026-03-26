import { describe, it, expect } from "@jest/globals";
import { ArCondicionadoGellaKazaAdapter } from "../../src/adapters/ArCondicionadoGellaKazaAdapter.js";
import { ArCondicionadoGellaKaza } from "../../src/lib/ArCondicionadoGellaKaza.js";

describe("ArCondicionadoGellaKazaAdapter Unit Tests", () => {
  it("deve inicializar desligado com temperatura 28", () => {
    const ac = new ArCondicionadoGellaKaza();
    const adapter = new ArCondicionadoGellaKazaAdapter(ac);

    expect(adapter.isOn()).toBe(false);
    expect(adapter.getTemperature()).toBe(28);
  });

  it("deve ligar o aparelho", () => {
    const ac = new ArCondicionadoGellaKaza();
    const adapter = new ArCondicionadoGellaKazaAdapter(ac);

    adapter.turnOn();

    expect(adapter.isOn()).toBe(true);
  });

  it("deve desligar o aparelho", () => {
    const ac = new ArCondicionadoGellaKaza();
    const adapter = new ArCondicionadoGellaKazaAdapter(ac);
    adapter.turnOn();

    adapter.turnOff();

    expect(adapter.isOn()).toBe(false);
  });

  it("deve definir temperatura aumentando gradualmente", () => {
    const ac = new ArCondicionadoGellaKaza();
    const adapter = new ArCondicionadoGellaKazaAdapter(ac);

    adapter.setTemperature(30);

    expect(adapter.getTemperature()).toBe(30);
    expect(adapter.isOn()).toBe(true);
  });

  it("deve definir temperatura diminuindo gradualmente", () => {
    const ac = new ArCondicionadoGellaKaza();
    const adapter = new ArCondicionadoGellaKazaAdapter(ac);

    adapter.setTemperature(25);

    expect(adapter.getTemperature()).toBe(25);
    expect(adapter.isOn()).toBe(true);
  });

  it("deve manter aparelho ligado após definir temperatura", () => {
    const ac = new ArCondicionadoGellaKaza();
    const adapter = new ArCondicionadoGellaKazaAdapter(ac);

    adapter.setTemperature(30);
    adapter.setTemperature(20);

    expect(adapter.isOn()).toBe(true);
  });

  it("deve ligar aparelho automaticamente ao definir temperatura", () => {
    const ac = new ArCondicionadoGellaKaza();
    const adapter = new ArCondicionadoGellaKazaAdapter(ac);

    expect(adapter.isOn()).toBe(false);

    adapter.setTemperature(30);

    expect(adapter.isOn()).toBe(true);
  });
});
