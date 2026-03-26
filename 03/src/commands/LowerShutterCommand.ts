import type { Shutter } from "../interfaces/Shutter.js";
import type { Command } from "./Command.js";

export class LowerShutterCommand implements Command {
  private shutter: Shutter;
  constructor(shutter: Shutter) {
    this.shutter = shutter;
  }

  execute(): void {
    this.shutter.lower();
  }
}
