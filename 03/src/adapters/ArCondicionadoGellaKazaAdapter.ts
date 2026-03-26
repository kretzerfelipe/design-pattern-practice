import type { AirConditioning } from "../interfaces/AirConditioning.js";
import type { ArCondicionadoGellaKaza } from "../lib/ArCondicionadoGellaKaza.js";

export class ArCondicionadoGellaKazaAdapter implements AirConditioning {
  private airConditioning: ArCondicionadoGellaKaza;

  constructor(airConditioning: ArCondicionadoGellaKaza) {
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
      this.airConditioning.ativar();
    }

    const currentTemperature = this.airConditioning.getTemperatura();
    if (temperature > currentTemperature) {
      while (this.airConditioning.getTemperatura() < temperature) {
        this.airConditioning.aumentarTemperatura();
      }
    } else if (temperature < currentTemperature) {
      while (this.airConditioning.getTemperatura() > temperature) {
        this.airConditioning.diminuirTemperatura();
      }
    }
  }

  turnOff(): void {
    this.airConditioning.desativar();
  }

  turnOn(): void {
    this.airConditioning.ativar();
  }
}
