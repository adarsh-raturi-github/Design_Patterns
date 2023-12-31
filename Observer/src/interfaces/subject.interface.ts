import { ObserverInterface } from "./observer.interface";

export interface SubjectInterface {
  registerObserver(observer: ObserverInterface): void;
  removeObserver(observer: ObserverInterface): void;
  notifyObservers(): void;
}
