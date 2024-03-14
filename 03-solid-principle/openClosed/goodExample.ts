export {}

interface IEmployee {
    name: string;
    getBouns(base: number): number;
}

class JuniorEmployee implements IEmployee {
    constructor(public name: string) {}
    getBouns(base: number): number {
        return Math.floor(base * 1.1);
    }
}

class MiddleEmployee implements IEmployee {
    constructor(public name: string) {}
    getBouns(base: number): number {
        return Math.floor(base * 1.5);
    }
}

class SeniorEmployee implements IEmployee {
    constructor(public name: string) {}
    getBouns(base: number): number {
        return Math.floor(base * 2);
    }
}

class ExpertEmployee implements IEmployee {
    constructor(public name: string) {}
    getBouns(base: number): number {
        return Math.floor(base * 3);
    }
}

function run() {
    const emp1 = new JuniorEmployee("Yamada");
    const emp2 = new MiddleEmployee("Suzuki");
    const emp3 = new SeniorEmployee("Tanaka");
    const emp4 = new ExpertEmployee("Bob");

    const base = 100;
    console.log(emp1.getBouns(base));
    console.log(emp2.getBouns(base));
    console.log(emp3.getBouns(base));
    console.log(emp4.getBouns(base));
}

run();