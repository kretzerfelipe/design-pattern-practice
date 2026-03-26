import type { Shutter } from "../interfaces/Shutter.js";
import type { PersianaNatLight } from "../lib/PersianaNatLight.js";

export class PersianaNatLightAdapter implements Shutter {
  constructor(private shutter: PersianaNatLight) {}

  raise(): void {
    this.shutter.abrirPalheta();
    this.shutter.subirPalheta();
  }

  lower(): void {
    this.shutter.descerPalheta();
    this.shutter.fecharPalheta();
  }

  isOpen(): boolean {
    return this.shutter.estaPalhetaErguida();
  }
}
