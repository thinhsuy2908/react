abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    abstract getSize(): void;
}
class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getSize(): void {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}

const rect = new Rectangle("Rectangle", 10, 20);
console.log(rect.getName()); 
rect.getSize(); 