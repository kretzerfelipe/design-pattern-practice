import type { Lamp } from "../interfaces/Lamp.js";
import type { Command } from "./Command.js";

export class TurnOffLampsCommand implements Command {
  private lamp: Lamp;

  constructor(lamp: Lamp) {
    this.lamp = lamp;
  }

  execute(): void {
    this.lamp.turnOff();
  }
}
