export class PersianaNatLight {
  private palhetaAberta: boolean;
  private palhetaErguida: boolean;

  constructor() {
    this.palhetaAberta = true;
    this.palhetaErguida = true;
  }

  descerPalheta(): void {
    this.palhetaErguida = false;
  }

  subirPalheta(): void {
    if (!this.palhetaAberta) {
      throw new Error("Palheta deve estar aberta para subir a persiana");
    }

    this.palhetaAberta = true;
  }

  abrirPalheta(): void {
    this.palhetaAberta = true;
  }

  fecharPalheta(): void {
    if (this.palhetaErguida) {
      throw new Error("Palheta não pode ser fechada com a persiana erguida");
    }

    this.palhetaAberta = false;
  }

  estaPalhetaAberta(): boolean {
    return this.palhetaAberta;
  }

  estaPalhetaErguida(): boolean {
    return this.palhetaErguida;
  }
}
