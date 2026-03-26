import { describe, it, expect } from "@jest/globals";
import { LampadaShoyuMiAdapter } from "../../src/adapters/LampadaShoyuMiAdapter.js";
import { LampadaShoyuMi } from "../../src/lib/LampadaShoyuMi.js";

describe("LampadaShoyuMiAdapter Unit Tests", () => {
  it("deve inicializar desligada", () => {
    const lampada = new LampadaShoyuMi();
    const adapter = new LampadaShoyuMiAdapter(lampada);

    expect(adapter.isOn()).toBe(false);
  });

  it("deve ligar a lâmpada", () => {
    const lampada = new LampadaShoyuMi();
    const adapter = new LampadaShoyuMiAdapter(lampada);

    adapter.turnOn();

    expect(adapter.isOn()).toBe(true);
  });

  it("deve desligar a lâmpada", () => {
    const lampada = new LampadaShoyuMi();
    const adapter = new LampadaShoyuMiAdapter(lampada);
    adapter.turnOn();

    adapter.turnOff();

    expect(adapter.isOn()).toBe(false);
  });

  it("deve refletir o estado da lâmpada subjacente", () => {
    const lampada = new LampadaShoyuMi();
    const adapter = new LampadaShoyuMiAdapter(lampada);

    lampada.ligar();
    expect(adapter.isOn()).toBe(true);

    lampada.desligar();
    expect(adapter.isOn()).toBe(false);
  });
});
