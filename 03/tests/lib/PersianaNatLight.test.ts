import { describe, it, expect } from "@jest/globals";
import { PersianaNatLight } from "../../src/lib/PersianaNatLight.js";

describe("PersianaNatLight Unit Tests", () => {
  it("deve inicializar com palheta aberta e erguida", () => {
    const persiana = new PersianaNatLight();

    expect(persiana.estaPalhetaAberta()).toBe(true);
    expect(persiana.estaPalhetaErguida()).toBe(true);
  });

  it("deve descer a palheta", () => {
    const persiana = new PersianaNatLight();

    persiana.descerPalheta();

    expect(persiana.estaPalhetaErguida()).toBe(false);
  });

  it("deve subir a palheta quando aberta", () => {
    const persiana = new PersianaNatLight();
    persiana.descerPalheta();

    persiana.subirPalheta();

    expect(persiana.estaPalhetaAberta()).toBe(true);
  });

  it("deve permitir subir palheta quando aberta", () => {
    const persiana = new PersianaNatLight();
    persiana.descerPalheta();

    expect(() => persiana.subirPalheta()).not.toThrow();
  });

  it("deve lançar erro ao fechar palheta quando erguida", () => {
    const persiana = new PersianaNatLight();

    expect(() => persiana.fecharPalheta()).toThrow(
      "Palheta não pode ser fechada com a persiana erguida",
    );
  });

  it("deve fechar a palheta quando abaixada", () => {
    const persiana = new PersianaNatLight();
    persiana.descerPalheta();

    persiana.fecharPalheta();

    expect(persiana.estaPalhetaAberta()).toBe(false);
  });

  it("deve permitir ciclo completo de operações", () => {
    const persiana = new PersianaNatLight();

    expect(persiana.estaPalhetaAberta()).toBe(true);
    expect(persiana.estaPalhetaErguida()).toBe(true);

    persiana.descerPalheta();
    expect(persiana.estaPalhetaErguida()).toBe(false);

    persiana.fecharPalheta();
    expect(persiana.estaPalhetaAberta()).toBe(false);

    persiana.abrirPalheta();
    expect(persiana.estaPalhetaAberta()).toBe(true);

    persiana.subirPalheta();
    expect(persiana.estaPalhetaAberta()).toBe(true);
  });
});
