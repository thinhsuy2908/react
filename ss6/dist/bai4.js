"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return 2 * this.radius * 3.14;
    }
    calculatePerimeter() {
        return 3.14 * this.radius * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return 2 * (this.width + this.height);
    }
    calculatePerimeter() {
        return this.width * this.height;
    }
}
let Circle = new circle(5);
console.log(Circle.calculateArea());
console.log(Circle.calculatePerimeter());
let rectangle = new Rectangle(3, 5);
console.log(rectangle.calculateArea());
console.log(rectangle.calculatePerimeter());
