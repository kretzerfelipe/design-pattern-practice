import { describe, it, expect, jest } from "@jest/globals";
import { TurnOnAirConditioningCommand } from "../../src/commands/TurnOffAirConditioningsCommand.js";
import type { AirConditioning } from "../../src/interfaces/AirConditioning.js";

describe("TurnOffAirConditioningsCommand Unit Tests", () => {
  it("deve desligar o ar condicionado ao executar", () => {
    const mockAirConditioning = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(true),
      setTemperature: jest.fn(),
      getTemperature: jest.fn().mockReturnValue(24),
    } as unknown as AirConditioning;

    const command = new TurnOnAirConditioningCommand(mockAirConditioning);
    command.execute();

    expect(mockAirConditioning.turnOff).toHaveBeenCalledTimes(1);
  });

  it("deve executar o comando sem erros", () => {
    const mockAirConditioning = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(false),
      setTemperature: jest.fn(),
      getTemperature: jest.fn().mockReturnValue(24),
    } as unknown as AirConditioning;

    const command = new TurnOnAirConditioningCommand(mockAirConditioning);

    expect(() => command.execute()).not.toThrow();
  });

  it("deve desligar ar condicionado já desligado", () => {
    const mockAirConditioning = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(false),
      setTemperature: jest.fn(),
      getTemperature: jest.fn().mockReturnValue(24),
    } as unknown as AirConditioning;

    const command = new TurnOnAirConditioningCommand(mockAirConditioning);
    command.execute();

    expect(mockAirConditioning.turnOff).toHaveBeenCalledTimes(1);
  });
});
