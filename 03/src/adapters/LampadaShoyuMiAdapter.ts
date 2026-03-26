import type { Lamp } from "../interfaces/Lamp.js";
import type { LampadaShoyuMi } from "../lib/LampadaShoyuMi.js";

export class LampadaShoyuMiAdapter implements Lamp {
  private lamp: LampadaShoyuMi;

  constructor(lamp: LampadaShoyuMi) {
    this.lamp = lamp;
  }

  isOn(): boolean {
    return this.lamp.estaLigada();
  }

  turnOff(): void {
    this.lamp.desligar();
  }

  turnOn(): void {
    this.lamp.ligar();
  }
}
