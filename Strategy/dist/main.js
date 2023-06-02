"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const No_Fly_1 = require("./src/Behaviour/FlyBehaviour/No_Fly");
const MuteQuack_1 = require("./src/Behaviour/QuackBehaviour/MuteQuack");
const MallardDuck_1 = require("./src/Ducks/MallardDuck");
const RedHeadDuck_1 = require("./src/Ducks/RedHeadDuck");
class Main {
    constructor() { }
    showMallardDuck() {
        this.duck = new MallardDuck_1.MallardDuck();
        // using default behaviour of duck
        this.duck.display();
        this.duck.performQuack();
        this.duck.performFly();
        // changing duck flying behaviour , now here comes use case of strategy pattern same can be done for quack behaviour
        this.duck.setFlyingBehaviuor(new No_Fly_1.NoFly());
        this.duck.performFly();
    }
    showRedHeadDuck() {
        console.log("---------------------------");
        this.duck = new RedHeadDuck_1.RedHeadDuck();
        // using default behaviour of duck
        this.duck.display();
        this.duck.performQuack();
        this.duck.performFly();
        // changing duck quack behaviour , now here comes use case of strategy pattern same can be done for flying behaviour
        this.duck.setQuackBehaviour(new MuteQuack_1.MuteQuack());
        this.duck.performQuack();
    }
}
const main = new Main();
main.showMallardDuck();
main.showRedHeadDuck();
