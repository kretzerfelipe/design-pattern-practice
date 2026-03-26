import { describe, it, expect, jest } from "@jest/globals";
import { TurnOffLampsCommand } from "../../src/commands/TurnOffLampsCommand.js";
import type { Lamp } from "../../src/interfaces/Lamp.js";

describe("TurnOffLampsCommand Unit Tests", () => {
  it("deve desligar a lâmpada ao executar", () => {
    const mockLamp = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(true),
    } as unknown as Lamp;

    const command = new TurnOffLampsCommand(mockLamp);
    command.execute();

    expect(mockLamp.turnOff).toHaveBeenCalledTimes(1);
  });

  it("deve executar o comando sem erros", () => {
    const mockLamp = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(false),
    } as unknown as Lamp;

    const command = new TurnOffLampsCommand(mockLamp);

    expect(() => command.execute()).not.toThrow();
  });

  it("deve desligar lâmpada já desligada", () => {
    const mockLamp = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(false),
    } as unknown as Lamp;

    const command = new TurnOffLampsCommand(mockLamp);
    command.execute();

    expect(mockLamp.turnOff).toHaveBeenCalledTimes(1);
  });
});
