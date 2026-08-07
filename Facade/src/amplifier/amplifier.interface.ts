import { IDvdPlayer } from "../dvd/dvd-player.interface";

export interface IAmplifier {
  on(): void;
  off(): void;
  setStereoSound(): void;
  setSurroundSound(): void;
  setVolume(level: number): void;
  setDvd(dvd: IDvdPlayer): void;
  toString(): void;
}
