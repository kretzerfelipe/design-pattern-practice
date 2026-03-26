import { describe, it, expect, jest } from "@jest/globals";
import { RaiseShutterCommand } from "../../src/commands/RaiseShutterCommand.js";
import type { Shutter } from "../../src/interfaces/Shutter.js";

describe("RaiseShutterCommand Unit Tests", () => {
  it("deve subir a persiana ao executar", () => {
    const mockShutter = {
      raise: jest.fn(),
      lower: jest.fn(),
      isOpen: jest.fn().mockReturnValue(true),
    } as unknown as Shutter;

    const command = new RaiseShutterCommand(mockShutter);
    command.execute();

    expect(mockShutter.raise).toHaveBeenCalledTimes(1);
  });

  it("deve executar o comando sem erros", () => {
    const mockShutter = {
      raise: jest.fn(),
      lower: jest.fn(),
      isOpen: jest.fn().mockReturnValue(false),
    } as unknown as Shutter;

    const command = new RaiseShutterCommand(mockShutter);

    expect(() => command.execute()).not.toThrow();
  });

  it("deve subir persiana já levantada", () => {
    const mockShutter = {
      raise: jest.fn(),
      lower: jest.fn(),
      isOpen: jest.fn().mockReturnValue(true),
    } as unknown as Shutter;

    const command = new RaiseShutterCommand(mockShutter);
    command.execute();

    expect(mockShutter.raise).toHaveBeenCalledTimes(1);
  });
});
