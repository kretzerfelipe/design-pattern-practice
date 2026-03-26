import { describe, it, expect } from "@jest/globals";
import { LampadaPhellipesAdapter } from "../../src/adapters/LampadaPhellipesAdapter.js";
import { LampadaPhellipes } from "../../src/lib/LampadaPhellipes.js";

describe("LampadaPhellipesAdapter Unit Tests", () => {
  it("deve inicializar desligada", () => {
    const lampada = new LampadaPhellipes();
    const adapter = new LampadaPhellipesAdapter(lampada);

    expect(adapter.isOn()).toBe(false);
  });

  it("deve ligar a lâmpada", () => {
    const lampada = new LampadaPhellipes();
    const adapter = new LampadaPhellipesAdapter(lampada);

    adapter.turnOn();

    expect(adapter.isOn()).toBe(true);
    expect(lampada.getIntensidade()).toBe(100);
  });

  it("deve desligar a lâmpada", () => {
    const lampada = new LampadaPhellipes();
    const adapter = new LampadaPhellipesAdapter(lampada);
    adapter.turnOn();

    adapter.turnOff();

    expect(adapter.isOn()).toBe(false);
    expect(lampada.getIntensidade()).toBe(0);
  });

  it("deve detectar que lâmpada está ligada com intensidade maior que 0", () => {
    const lampada = new LampadaPhellipes();
    lampada.setIntensidade(50);
    const adapter = new LampadaPhellipesAdapter(lampada);

    expect(adapter.isOn()).toBe(true);
  });

  it("deve detectar que lâmpada está desligada com intensidade 0", () => {
    const lampada = new LampadaPhellipes();
    lampada.setIntensidade(0);
    const adapter = new LampadaPhellipesAdapter(lampada);

    expect(adapter.isOn()).toBe(false);
  });
});
