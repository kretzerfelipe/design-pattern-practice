import { describe, it, expect, jest } from "@jest/globals";
import { LowerShutterCommand } from "../../src/commands/LowerShutterCommand.js";
import type { Shutter } from "../../src/interfaces/Shutter.js";

describe("LowerShutterCommand Unit Tests", () => {
  it("deve descer a persiana ao executar", () => {
    const mockShutter = {
      raise: jest.fn(),
      lower: jest.fn(),
      isOpen: jest.fn().mockReturnValue(false),
    } as unknown as Shutter;

    const command = new LowerShutterCommand(mockShutter);
    command.execute();

    expect(mockShutter.lower).toHaveBeenCalledTimes(1);
  });

  it("deve executar o comando sem erros", () => {
    const mockShutter = {
      raise: jest.fn(),
      lower: jest.fn(),
      isOpen: jest.fn().mockReturnValue(true),
    } as unknown as Shutter;

    const command = new LowerShutterCommand(mockShutter);

    expect(() => command.execute()).not.toThrow();
  });

  it("deve descer persiana já descida", () => {
    const mockShutter = {
      raise: jest.fn(),
      lower: jest.fn(),
      isOpen: jest.fn().mockReturnValue(false),
    } as unknown as Shutter;

    const command = new LowerShutterCommand(mockShutter);
    command.execute();

    expect(mockShutter.lower).toHaveBeenCalledTimes(1);
  });
});
