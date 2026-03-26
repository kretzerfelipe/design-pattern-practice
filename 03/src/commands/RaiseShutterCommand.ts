import type { Shutter } from "../interfaces/Shutter.js";
import type { Command } from "./Command.js";

export class RaiseShutterCommand implements Command {
  private shutter: Shutter;
  constructor(shutter: Shutter) {
    this.shutter = shutter;
  }

  execute(): void {
    this.shutter.raise();
  }
}
