export {}

class Patient {
    constructor(public id: number, public name: string) {}
}

interface Iterator {
    hasNext(): boolean;
    next(): any;
}

interface Aggregate {
    getIterator(): Iterator;
}

class WaitingRoom implements Aggregate {
    private patients: Patient[] = [];

    getPatients(): Patient[] {
        return this.patients;
    }

    getCount(): number {
        return this.patients.length;
    }

    checkIn(patient: Patient) {
        this.patients.push(patient);
    }

    getIterator(): Iterator {
        return new WaitingRoomIterator(this);
    }
}

class WaitingRoomIterator implements Iterator {
    private position: number = 0;

    constructor(private aggregate: WaitingRoom) {}

    hasNext(): boolean {
        return this. position < this.aggregate.getCount();
    }

    next() {
        if (!this.hasNext()) {
            console.log("No more patients")
            return;
        }
        const patient = this.aggregate.getPatients()[this.position];
        this.position++;
        return patient;
    }
}

function run() {
    const waitingRoom = new WaitingRoom();
    waitingRoom.checkIn(new Patient(1, "John"));
    waitingRoom.checkIn(new Patient(2, "Jane"));
    waitingRoom.checkIn(new Patient(3, "Doe"));

    const iterator = waitingRoom.getIterator();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

run();
