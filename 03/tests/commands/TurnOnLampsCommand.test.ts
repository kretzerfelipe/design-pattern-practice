import { describe, it, expect, jest } from "@jest/globals";
import { TurnOnLampsCommand } from "../../src/commands/TurnOnLampsCommand.js";
import type { Lamp } from "../../src/interfaces/Lamp.js";

describe("TurnOnLampsCommand Unit Tests", () => {
  it("deve ligar a lâmpada ao executar", () => {
    const mockLamp = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(false),
    } as unknown as Lamp;

    const command = new TurnOnLampsCommand(mockLamp);
    command.execute();

    expect(mockLamp.turnOn).toHaveBeenCalledTimes(1);
  });

  it("deve executar o comando sem erros", () => {
    const mockLamp = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(true),
    } as unknown as Lamp;

    const command = new TurnOnLampsCommand(mockLamp);

    expect(() => command.execute()).not.toThrow();
  });

  it("deve ligar lâmpada já ligada", () => {
    const mockLamp = {
      turnOn: jest.fn(),
      turnOff: jest.fn(),
      isOn: jest.fn().mockReturnValue(true),
    } as unknown as Lamp;

    const command = new TurnOnLampsCommand(mockLamp);
    command.execute();

    expect(mockLamp.turnOn).toHaveBeenCalledTimes(1);
  });
});
