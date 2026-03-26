import { describe, it, expect, jest } from "@jest/globals";
import { TurnOnAirConditioningCommand } from "../../src/commands/TurnOnAirConditioningsCommand.js";
import type { AirConditioning } from "../../src/interfaces/AirConditioning.js";

describe("TurnOnAirConditioningsCommand Unit Tests", () => {
  it("deve ligar o ar condicionado ao executar", () => {
    const mockAirConditioning = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(false),
      setTemperature: jest.fn(),
      getTemperature: jest.fn().mockReturnValue(24),
    } as unknown as AirConditioning;

    const command = new TurnOnAirConditioningCommand(mockAirConditioning);
    command.execute();

    expect(mockAirConditioning.turnOn).toHaveBeenCalledTimes(1);
  });

  it("deve executar o comando sem erros", () => {
    const mockAirConditioning = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(true),
      setTemperature: jest.fn(),
      getTemperature: jest.fn().mockReturnValue(24),
    } as unknown as AirConditioning;

    const command = new TurnOnAirConditioningCommand(mockAirConditioning);

    expect(() => command.execute()).not.toThrow();
  });

  it("deve ligar ar condicionado já ligado", () => {
    const mockAirConditioning = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(true),
      setTemperature: jest.fn(),
      getTemperature: jest.fn().mockReturnValue(24),
    } as unknown as AirConditioning;

    const command = new TurnOnAirConditioningCommand(mockAirConditioning);
    command.execute();

    expect(mockAirConditioning.turnOn).toHaveBeenCalledTimes(1);
  });
});
