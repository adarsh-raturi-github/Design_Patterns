export class HitachiLight {
  constructor(private readonly location: string) {}
  on() {
    console.log(`${this.location} light is on`);
  }

  off() {
    console.log(`${this.location} Light is off`);
  }
}
