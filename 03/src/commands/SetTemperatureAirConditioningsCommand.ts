import type { AirConditioning } from "../interfaces/AirConditioning.js";
import type { Command } from "./Command.js";

export class TurnOnAirConditioningCommand implements Command {
  private airConditionings: AirConditioning;
  private temperature: number;

  constructor(airConditionings: AirConditioning, temperature: number) {
    this.airConditionings = airConditionings;
    this.temperature = temperature;
  }

  execute(): void {
    this.airConditionings.setTemperature(this.temperature);
  }
}
