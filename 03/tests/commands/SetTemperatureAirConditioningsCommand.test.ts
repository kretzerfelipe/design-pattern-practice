import { describe, it, expect, jest } from "@jest/globals";
import { TurnOnAirConditioningCommand } from "../../src/commands/SetTemperatureAirConditioningsCommand.js";
import type { AirConditioning } from "../../src/interfaces/AirConditioning.js";

describe("SetTemperatureAirConditioningsCommand Unit Tests", () => {
  it("deve definir temperatura ao executar", () => {
    const mockAirConditioning = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(true),
      setTemperature: jest.fn(),
      getTemperature: jest.fn().mockReturnValue(24),
    } as unknown as AirConditioning;

    const command = new TurnOnAirConditioningCommand(mockAirConditioning, 25);
    command.execute();

    expect(mockAirConditioning.setTemperature).toHaveBeenCalledTimes(1);
    expect(mockAirConditioning.setTemperature).toHaveBeenCalledWith(25);
  });

  it("deve executar com temperatura mínima", () => {
    const mockAirConditioning = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(true),
      setTemperature: jest.fn(),
      getTemperature: jest.fn().mockReturnValue(15),
    } as unknown as AirConditioning;

    const command = new TurnOnAirConditioningCommand(mockAirConditioning, 15);
    command.execute();

    expect(mockAirConditioning.setTemperature).toHaveBeenCalledWith(15);
  });

  it("deve executar com temperatura máxima", () => {
    const mockAirConditioning = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(true),
      setTemperature: jest.fn(),
      getTemperature: jest.fn().mockReturnValue(35),
    } as unknown as AirConditioning;

    const command = new TurnOnAirConditioningCommand(mockAirConditioning, 35);
    command.execute();

    expect(mockAirConditioning.setTemperature).toHaveBeenCalledWith(35);
  });

  it("deve executar sem erros", () => {
    const mockAirConditioning = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(true),
      setTemperature: jest.fn(),
      getTemperature: jest.fn().mockReturnValue(24),
    } as unknown as AirConditioning;

    const command = new TurnOnAirConditioningCommand(mockAirConditioning, 25);

    expect(() => command.execute()).not.toThrow();
  });
});
