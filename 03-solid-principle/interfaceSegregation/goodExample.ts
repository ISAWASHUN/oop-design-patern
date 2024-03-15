interface Vehicle {
    name: string;
    color: string;
}

interface Flyable {
    fly(): void;
}

interface Moveable {
    start(): void;
    stop(): void;
}

export class Airplane implements Vehicle, Moveable, Flyable {
    constructor(
        public name: string,
        public color: string
    ) {}

    start() {
        console.log("start!");
    }
    stop() {
        console.log("stop!");
    }
    fly() {
        console.log("fly!");
    }
}

export class Car implements Vehicle, Moveable {
    constructor(
        public name: string,
        public color: string
    ) {}

    start() {
        console.log("start!");
    }
    stop() {
        console.log("stop!");
    }
}

function run() {
    const v1: Vehicle & Moveable & Flyable = new Airplane("AirBus", "white");
    const v2: Vehicle & Moveable = new Car("Prius", "black");

    v1.fly();
    v2.start();
}