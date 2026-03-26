import type { AirConditioning } from "../interfaces/AirConditioning.js";
import type { Command } from "./Command.js";

export class TurnOnAirConditioningCommand implements Command {
  private airConditionings: AirConditioning;

  constructor(airConditionings: AirConditioning) {
    this.airConditionings = airConditionings;
  }

  execute(): void {
    this.airConditionings.turnOn();
  }
}
