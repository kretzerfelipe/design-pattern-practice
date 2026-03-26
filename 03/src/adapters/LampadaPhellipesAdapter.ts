import type { Lamp } from "../interfaces/Lamp.js";
import type { LampadaPhellipes } from "../lib/LampadaPhellipes.js";

export class LampadaPhellipesAdapter implements Lamp {
  private lamp: LampadaPhellipes;

  constructor(lamp: LampadaPhellipes) {
    this.lamp = lamp;
  }

  turnOn(): void {
    this.lamp.setIntensidade(100);
  }

  turnOff(): void {
    this.lamp.setIntensidade(0);
  }

  isOn(): boolean {
    return this.lamp.getIntensidade() > 0;
  }
}
