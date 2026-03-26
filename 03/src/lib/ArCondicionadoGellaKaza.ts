export class ArCondicionadoGellaKaza {
  private ligado: boolean;
  private temperatura: number;

  constructor() {
    this.ligado = false;
    this.temperatura = 28;
  }

  ativar(): void {
    this.ligado = true;
  }

  desativar(): void {
    this.ligado = false;
  }

  aumentarTemperatura(): void {
    if (this.temperatura + 1 > 35) {
      throw new Error("Limite de temperatura atingido 35");
    }

    this.temperatura++;
  }

  diminuirTemperatura(): void {
    if (this.temperatura - 1 < 15) {
      throw new Error("Limite de temperatura atingido 15");
    }

    this.temperatura--;
  }

  getTemperatura(): number {
    return this.temperatura;
  }

  estaLigado(): boolean {
    return this.ligado;
  }
}
