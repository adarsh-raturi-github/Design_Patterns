import { Singleton } from "./src/Singleton";

class Main {
  async run() {
    {
      let mySingleton1 = await Singleton.getInstance();
      console.log(mySingleton1.getNumber());

      let mySingleton2 = await Singleton.getInstance();
      console.log(mySingleton2.getNumber());

      let mySingleton3 = await Singleton.getInstance();
      console.log(mySingleton3.getNumber());

      let mySingleton4 = await Singleton.getInstance();
      console.log(mySingleton4.getNumber());

      let mySingleton5 = await Singleton.getInstance();
      console.log(mySingleton5.getNumber());
    }
  }
}
new Main().run();
