import { describe, it, expect, jest } from "@jest/globals";
import { MacroCommand } from "../../src/commands/MacroCommand.js";
import type { Command } from "../../src/commands/Command.js";

describe("MacroCommand Unit Tests", () => {
  it("deve executar um comando adicionado", () => {
    const mockCommand = {
      execute: jest.fn(),
    } as unknown as Command;

    const macro = new MacroCommand();
    macro.addCommand(mockCommand);
    macro.execute();

    expect(mockCommand.execute).toHaveBeenCalledTimes(1);
  });

  it("deve executar múltiplos comandos em ordem", () => {
    const mockCommand1 = { execute: jest.fn() } as unknown as Command;
    const mockCommand2 = { execute: jest.fn() } as unknown as Command;
    const mockCommand3 = { execute: jest.fn() } as unknown as Command;

    const macro = new MacroCommand();
    macro.addCommand(mockCommand1);
    macro.addCommand(mockCommand2);
    macro.addCommand(mockCommand3);

    macro.execute();

    expect(mockCommand1.execute).toHaveBeenCalledTimes(1);
    expect(mockCommand2.execute).toHaveBeenCalledTimes(1);
    expect(mockCommand3.execute).toHaveBeenCalledTimes(1);
  });

  it("deve executar sem erros quando vazio", () => {
    const macro = new MacroCommand();

    expect(() => macro.execute()).not.toThrow();
  });

  it("deve adicionar múltiplos comandos e executá-los", () => {
    const mockCommand1 = { execute: jest.fn() } as unknown as Command;
    const mockCommand2 = { execute: jest.fn() } as unknown as Command;

    const macro = new MacroCommand();
    macro.addCommand(mockCommand1);
    macro.addCommand(mockCommand2);
    macro.execute();

    expect(mockCommand1.execute).toHaveBeenCalled();
    expect(mockCommand2.execute).toHaveBeenCalled();
  });

  it("deve permitir adicionar comando e depois executar novamente", () => {
    const mockCommand1 = { execute: jest.fn() } as unknown as Command;
    const mockCommand2 = { execute: jest.fn() } as unknown as Command;

    const macro = new MacroCommand();
    macro.addCommand(mockCommand1);
    macro.execute();

    macro.addCommand(mockCommand2);
    macro.execute();

    expect(mockCommand1.execute).toHaveBeenCalledTimes(2);
    expect(mockCommand2.execute).toHaveBeenCalledTimes(1);
  });
});
