"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class vehicel {
    constructor(speed) {
        this.speed = speed;
    }
    slowDown(newspeed) {
        if (newspeed > this.speed) {
            return console.log("khong hop le");
        }
        this.speed = newspeed;
        console.log(this.speed);
    }
    speedUp(newspeed) {
        if (newspeed < this.speed) {
            return console.log("khong hop le");
        }
        this.speed = newspeed;
        console.log(this.speed);
    }
    stop() {
        this.speed = 0;
        console.log(this.speed);
    }
}
let car = new vehicel(40);
car.slowDown(10);
car.speedUp(50);
car.stop();
