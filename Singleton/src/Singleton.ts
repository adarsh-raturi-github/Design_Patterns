export class Singleton {
  private static uniqueInstance: Singleton;
  private static initializing: Promise<Singleton> | null = null;
  private number = 0;
  private constructor() {
    this.number = 0;
  }
  public static getInstance() {
    if (this.uniqueInstance) return Promise.resolve(this.uniqueInstance);

    if (!this.initializing) {
      this.initializing = (async () => {
        // expensive initialization
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve("Resolved");
          }, 5000);
        });
        this.uniqueInstance = new Singleton();

        return this.uniqueInstance;
      })();
    }

    return this.initializing;
  }

  public getNumber() {
    this.number += 1;
    return this.number;
  }
}
