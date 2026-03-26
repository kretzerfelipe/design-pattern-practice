import type { AirConditioning } from "../interfaces/AirConditioning.js";
import type { ArCondicionadoVentoBaumn } from "../lib/ArCondicionadoVentoBaumn.js";

export class ArCondicionadoVentoBaumnAdapter implements AirConditioning {
  private airConditioning: ArCondicionadoVentoBaumn;

  constructor(airConditioning: ArCondicionadoVentoBaumn) {
    this.airConditioning = airConditioning;
  }

  getTemperature(): number {
    return this.airConditioning.getTemperatura();
  }

  isOn(): boolean {
    return this.airConditioning.estaLigado();
  }

  setTemperature(temperature: number): void {
    if (!this.airConditioning.estaLigado()) {
      this.airConditioning.ligar();
    }
    this.airConditioning.definirTemperatura(temperature);
  }

  turnOff(): void {
    this.airConditioning.desligar();
  }

  turnOn(): void {
    this.airConditioning.ligar();
  }
}
