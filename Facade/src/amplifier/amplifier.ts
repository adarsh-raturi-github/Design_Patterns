import { IDvdPlayer } from "../dvd/dvd-player.interface";
import { IAmplifier } from "./amplifier.interface";

export default class Amplifier implements IAmplifier {
  private readonly description: string;

  private dvd!: IDvdPlayer;

  constructor(description: string) {
    this.description = description;
  }

  public on(): void {
    console.log(this.description + " on");
  }

  public off(): void {
    console.log(this.description + " off");
  }

  public setStereoSound(): void {
    console.log(this.description + " stereo mode on");
  }

  public setSurroundSound(): void {
    console.log(
      this.description + " surround sound on (5 speakers, 1 subwoofer)",
    );
  }

  public setVolume(level: number): void {
    console.log(this.description + " setting volume to " + level);
  }

  public setDvd(dvd: IDvdPlayer): void {
    this.dvd = dvd;
    console.log(this.description + " setting DVD player to " + this.dvd);
  }

  public toString(): string {
    return this.description;
  }
}
