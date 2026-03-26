import type { Shutter } from "../interfaces/Shutter.js";
import type { PersianaSolarius } from "../lib/PersianaSolarius.js";

export class PersianaSolariusAdapter implements Shutter {
  constructor(private shutter: PersianaSolarius) {}

  raise(): void {
    this.shutter.subirPersiana();
  }

  lower(): void {
    this.shutter.descerPersiana();
  }

  isOpen(): boolean {
    return this.shutter.estaAberta();
  }
}
