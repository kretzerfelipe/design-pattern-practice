export interface Shutter {
  raise(): void;
  lower(): void;
  isOpen(): boolean;
}
