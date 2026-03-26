import type { Command } from "../commands/Command.js";
import { MacroCommand } from "../commands/MacroCommand.js";

export class SmartHomeController {
  private commands: Map<string, MacroCommand> = new Map();

  createMacro(name: string): void {
    this.commands.set(name, new MacroCommand());
  }

  addCommandToMacro(name: string, command: Command): void {
    const macro = this.commands.get(name);
    if (!macro) {
      throw new Error(`Macro "${name}" não encontrada.`);
    }
    macro.addCommand(command);
  }

  executeMacro(name: string): void {
    const macro = this.commands.get(name);
    if (!macro) {
      throw new Error(`Macro "${name}" não encontrada.`);
    }
    macro.execute();
  }

  removeMacro(name: string): void {
    this.commands.delete(name);
  }
}
