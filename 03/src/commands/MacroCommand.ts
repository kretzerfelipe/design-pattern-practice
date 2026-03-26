import type { Command } from "./Command.js";

export class MacroCommand implements Command {
  private commands: Command[] = [];

  execute(): void {
    this.commands.forEach((command) => command.execute());
  }

  addCommand(command: Command): void {
    this.commands.push(command);
  }
}
