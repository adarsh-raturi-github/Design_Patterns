import { ITheaterScreen } from "./theater-screen.interface";

export class TheaterScreen implements ITheaterScreen {
  private readonly description: string;

  constructor(description: string) {
    this.description = description;
  }

  public up() {
    console.log(this.description + " going up");
  }

  public down() {
    console.log(this.description + " going down");
  }

  public toString(): string {
    return this.description;
  }
}
