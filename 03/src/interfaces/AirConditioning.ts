export interface AirConditioning {
  turnOn(): void;
  turnOff(): void;
  setTemperature(temperature: number): void;
  isOn(): boolean;
  getTemperature(): number;
}
