import type { Lamp } from "../interfaces/Lamp.js";
import type { Command } from "./Command.js";

export class TurnOnLampsCommand implements Command {
  private lamp: Lamp;

  constructor(lamp: Lamp) {
    this.lamp = lamp;
  }

  execute(): void {
    this.lamp.turnOn();
  }
}
