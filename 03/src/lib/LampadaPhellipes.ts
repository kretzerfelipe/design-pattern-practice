export class LampadaPhellipes {
  private intensidade: number;

  constructor() {
    this.intensidade = 0;
  }

  getIntensidade(): number {
    return this.intensidade;
  }

  setIntensidade(intensidade: number): void {
    if (intensidade < 0 || intensidade > 100) {
      throw new Error("O valor da intensidade deve ser entre 0 e 100");
    }

    this.intensidade = intensidade;
  }
}
