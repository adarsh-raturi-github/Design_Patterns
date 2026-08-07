export interface IDvdPlayer {
  on(): void;
  off(): void;
  eject(): void;
  stop(): void;
  pause(): void;
  setTwoChannelAudio(): void;
  setSurroundAudio(): void;
  toString(): void;
  play(movie: string): void;
  play(track: number): void;
}
