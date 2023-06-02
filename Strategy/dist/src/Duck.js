"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duck = void 0;
class Duck {
    setFlyingBehaviuor(value) {
        this.flyBehaviour = value;
    }
    setQuackBehaviour(value) {
        this.quackBehaviour = value;
    }
    performFly() {
        this.flyBehaviour.fly();
    }
    performQuack() {
        this.quackBehaviour.quack();
    }
}
exports.Duck = Duck;
