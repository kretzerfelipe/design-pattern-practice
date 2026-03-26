export class ArCondicionadoVentoBaumn {
  private ligado: boolean;
  private temperatura: number;

  constructor() {
    this.ligado = false;
    this.temperatura = 24;
  }

  definirTemperatura(temperatura: number): void {
    if (!this.ligado) {
      throw new Error(
        "Para definir a temperatura o aparelho deve estar ligado",
      );
    }

    if (temperatura < 15 || temperatura > 35) {
      throw new Error("Temperatura deve ser entre 15 e 35");
    }

    this.temperatura = temperatura;
  }

  ligar(): void {
    this.ligado = true;
  }

  desligar(): void {
    this.ligado = false;
  }

  getTemperatura(): number {
    return this.temperatura;
  }

  estaLigado(): boolean {
    return this.ligado;
  }
}
