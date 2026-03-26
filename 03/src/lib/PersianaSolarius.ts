export class PersianaSolarius {
  private aberta: boolean;

  constructor() {
    this.aberta = true;
  }

  subirPersiana(): void {
    this.aberta = true;
  }

  descerPersiana(): void {
    this.aberta = false;
  }

  estaAberta(): boolean {
    return this.aberta;
  }
}
