import { IAmplifier } from "./amplifier/amplifier.interface";
import { IDvdPlayer } from "./dvd/dvd-player.interface";
import { IPopper } from "./popper/popper.interface";
import { ITheaterLight } from "./theater-light/theater-light.interface";
import { ITheaterScreen } from "./theater-screen/theater-screen.interface";

export default class HomeTheaterFacade {
  private amp: IAmplifier;
  private readonly dvd: IDvdPlayer;

  private screen: ITheaterScreen;
  private lights: ITheaterLight;
  private popper: IPopper;

  constructor(
    amp: IAmplifier,

    dvd: IDvdPlayer,

    screen: ITheaterScreen,
    lights: ITheaterLight,
    popper: IPopper,
  ) {
    this.amp = amp;

    this.dvd = dvd;

    this.screen = screen;
    this.lights = lights;
    this.popper = popper;
  }

  public watchMovie(movie: string): void {
    console.log(
      "....................Get ready to watch a movie......................",
    );
    this.popper.on();
    this.popper.pop();
    this.lights.dim(10);
    this.screen.down();
    this.amp.on();
    this.amp.setDvd(this.dvd);
    this.amp.setSurroundSound();
    this.amp.setVolume(5);
    this.dvd.on();
    this.dvd.play(movie);
  }

  public endMovie(): void {
    console.log(
      ".........................Shutting movie theater down.................",
    );
    this.popper.off();
    this.lights.on();
    this.screen.up();
    this.amp.off();
    this.dvd.stop();
    this.dvd.eject();
    this.dvd.off();
  }
}
