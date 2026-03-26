import { describe, it, expect, jest } from "@jest/globals";
import { SmartHomeController } from "../../src/controller/SmartHomeController.js";
import type { Command } from "../../src/commands/Command.js";

describe("SmartHomeController Unit Tests", () => {
  it("deve criar uma macro", () => {
    const controller = new SmartHomeController();

    expect(() => controller.createMacro("Boa Noite")).not.toThrow();
  });

  it("deve lançar erro ao adicionar comando a macro inexistente", () => {
    const controller = new SmartHomeController();
    const mockCommand = { execute: jest.fn() } as unknown as Command;

    expect(() => controller.addCommandToMacro("Boa Noite", mockCommand)).toThrow(
      'Macro "Boa Noite" não encontrada.'
    );
  });

  it("deve adicionar comando a uma macro", () => {
    const controller = new SmartHomeController();
    const mockCommand = { execute: jest.fn() } as unknown as Command;

    controller.createMacro("Boa Noite");
    expect(() => controller.addCommandToMacro("Boa Noite", mockCommand)).not.toThrow();
  });

  it("deve executar uma macro", () => {
    const controller = new SmartHomeController();
    const mockCommand = { execute: jest.fn() } as unknown as Command;

    controller.createMacro("Boa Noite");
    controller.addCommandToMacro("Boa Noite", mockCommand);
    controller.executeMacro("Boa Noite");

    expect(mockCommand.execute).toHaveBeenCalledTimes(1);
  });

  it("deve lançar erro ao executar macro inexistente", () => {
    const controller = new SmartHomeController();

    expect(() => controller.executeMacro("Boa Noite")).toThrow(
      'Macro "Boa Noite" não encontrada.'
    );
  });

  it("deve remover uma macro", () => {
    const controller = new SmartHomeController();
    const mockCommand = { execute: jest.fn() } as unknown as Command;

    controller.createMacro("Boa Noite");
    controller.removeMacro("Boa Noite");

    expect(() => controller.addCommandToMacro("Boa Noite", mockCommand)).toThrow(
      'Macro "Boa Noite" não encontrada.'
    );
  });

  it("deve executar múltiplos comandos em uma macro", () => {
    const controller = new SmartHomeController();
    const mockCommand1 = { execute: jest.fn() } as unknown as Command;
    const mockCommand2 = { execute: jest.fn() } as unknown as Command;
    const mockCommand3 = { execute: jest.fn() } as unknown as Command;

    controller.createMacro("Boa Noite");
    controller.addCommandToMacro("Boa Noite", mockCommand1);
    controller.addCommandToMacro("Boa Noite", mockCommand2);
    controller.addCommandToMacro("Boa Noite", mockCommand3);
    controller.executeMacro("Boa Noite");

    expect(mockCommand1.execute).toHaveBeenCalledTimes(1);
    expect(mockCommand2.execute).toHaveBeenCalledTimes(1);
    expect(mockCommand3.execute).toHaveBeenCalledTimes(1);
  });

  it("deve gerenciar múltiplas macros independentemente", () => {
    const controller = new SmartHomeController();
    const mockCommand1 = { execute: jest.fn() } as unknown as Command;
    const mockCommand2 = { execute: jest.fn() } as unknown as Command;

    controller.createMacro("Boa Noite");
    controller.createMacro("Bom Dia");

    controller.addCommandToMacro("Boa Noite", mockCommand1);
    controller.addCommandToMacro("Bom Dia", mockCommand2);

    controller.executeMacro("Boa Noite");

    expect(mockCommand1.execute).toHaveBeenCalledTimes(1);
    expect(mockCommand2.execute).not.toHaveBeenCalled();
  });

  it("deve permitir executar macro múltiplas vezes", () => {
    const controller = new SmartHomeController();
    const mockCommand = { execute: jest.fn() } as unknown as Command;

    controller.createMacro("Boa Noite");
    controller.addCommandToMacro("Boa Noite", mockCommand);

    controller.executeMacro("Boa Noite");
    controller.executeMacro("Boa Noite");

    expect(mockCommand.execute).toHaveBeenCalledTimes(2);
  });
});
