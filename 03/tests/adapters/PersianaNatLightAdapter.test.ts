import { describe, it, expect } from "@jest/globals";
import { PersianaNatLightAdapter } from "../../src/adapters/PersianaNatLightAdapter.js";
import { PersianaNatLight } from "../../src/lib/PersianaNatLight.js";

describe("PersianaNatLightAdapter Unit Tests", () => {
  it("deve inicializar erguida", () => {
    const persiana = new PersianaNatLight();
    const adapter = new PersianaNatLightAdapter(persiana);

    expect(adapter.isOpen()).toBe(true);
  });

  it("deve descer a palheta", () => {
    const persiana = new PersianaNatLight();
    const adapter = new PersianaNatLightAdapter(persiana);

    adapter.lower();

    expect(adapter.isOpen()).toBe(false);
  });

  it("não deve conseguir subir a palheta após descer", () => {
    const persiana = new PersianaNatLight();
    const adapter = new PersianaNatLightAdapter(persiana);
    adapter.lower();

    adapter.raise();

    expect(adapter.isOpen()).toBe(false);
  });

  it("deve refletir o estado aberto quando persiana está inicialmente erguida", () => {
    const persiana = new PersianaNatLight();
    const adapter = new PersianaNatLightAdapter(persiana);

    expect(adapter.isOpen()).toBe(true);
  });

  it("deve refletir o estado fechado quando persiana está descida", () => {
    const persiana = new PersianaNatLight();
    const adapter = new PersianaNatLightAdapter(persiana);

    adapter.lower();

    expect(adapter.isOpen()).toBe(false);
  });

  it("deve permanecer descida depois de descer", () => {
    const persiana = new PersianaNatLight();
    const adapter = new PersianaNatLightAdapter(persiana);

    adapter.lower();

    expect(adapter.isOpen()).toBe(false);
  });
});
