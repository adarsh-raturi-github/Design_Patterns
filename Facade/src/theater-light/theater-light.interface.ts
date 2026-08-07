export interface ITheaterLight {
  on(): void;
  off(): void;
  dim(level: number): void;
  toString(): void;
}
