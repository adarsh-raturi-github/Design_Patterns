import Amplifier from "./src/amplifier/amplifier";
import { IAmplifier } from "./src/amplifier/amplifier.interface";
import DvdPlayer from "./src/dvd/dvd-player";
import { IDvdPlayer } from "./src/dvd/dvd-player.interface";
import HomeTheaterFacade from "./src/home-theater.facade";
import PopcornPopper from "./src/popper/popper";
import { IPopper } from "./src/popper/popper.interface";
import TheaterLights from "./src/theater-light/theater-light";
import { ITheaterLight } from "./src/theater-light/theater-light.interface";
import { TheaterScreen } from "./src/theater-screen/theater-screen";
import { ITheaterScreen } from "./src/theater-screen/theater-screen.interface";

class Main {
  constructor() {
    let amp: IAmplifier = new Amplifier("Top-O-Line Amplifier");
    let dvd: IDvdPlayer = new DvdPlayer("Top-O-Line DVD Player", amp);
    let lights: ITheaterLight = new TheaterLights("Theater Ceiling Lights");
    let screen: ITheaterScreen = new TheaterScreen("Theater Screen");
    let popper: IPopper = new PopcornPopper("Popcorn Popper");

    let homeTheater = new HomeTheaterFacade(amp, dvd, screen, lights, popper);

    homeTheater.watchMovie("Raiders of the Lost Ark");
    homeTheater.endMovie();
  }
}

new Main();
