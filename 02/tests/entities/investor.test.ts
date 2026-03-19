import { jest, describe, it, expect } from "@jest/globals";
import { Investor } from "../../src/entities/investor.js";
import { Stock } from "../../src/entities/stock.js";

describe("Investor Unit Tests", () => {
  it("deve criar um investidor e retornar o nome correto", () => {
    const investor = new Investor("Mariana");
    expect(investor.getName()).toBe("Mariana");
  });

  it("deve reagir à atualização de preço da ação (Observer)", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const investor = new Investor("Joaquim");

    const mockStock = new Stock("acao", 20);

    investor.update(mockStock, 25.5);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        "Notificação para usuário Joaquim. A ação acao agora tem valor R$25.50"
      )
    );

    consoleSpy.mockRestore();
  });
});
