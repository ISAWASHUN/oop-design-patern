export {}

abstract class CreditCard {
    constructor(public owner: string) {}

    getOwner(): string {
        return this.owner;
    }

    abstract getCardType(): string;
    abstract getAnnualCharge(): number;
}

class Platinum extends CreditCard {
    getCardType(): string {
        return "Platinum";
    }

    getAnnualCharge(): number {
        return 30000
    }
}

class Gold extends CreditCard {
    getCardType(): string {
        return "Gold";
    }

    getAnnualCharge(): number {
        return 10000
    }
}

abstract class CreditCardFactory {
    abstract createCreditCard(owner: string);
    abstract registerCreditCard(creditCard: CreditCard);

    create(owner: string): CreditCard {
        let creditCard = this.createCreditCard(owner);
        this.registerCreditCard(creditCard);
        return creditCard;
    }
}

const creditCardDatabase = [];

class PlatinumCreditFactory extends CreditCardFactory {
    createCreditCard(owner: string): CreditCard {
        return new Platinum(owner);
    }

    registerCreditCard(creditCard: CreditCard) {
        creditCardDatabase.push(creditCard);
    }
}

class GoldCreditFactory extends CreditCardFactory {
    createCreditCard(owner: string): CreditCard {
        return new Gold(owner);
    }

    registerCreditCard(creditCard: CreditCard) {
        creditCardDatabase.push(creditCard);
    }
}

function run() {
    const platinumCardFactory = new PlatinumCreditFactory();
    const platinumCard = platinumCardFactory.create("Platinum Card");
    console.log(platinumCard);

    const goldCardFactory = new GoldCreditFactory();
    const goldCard = goldCardFactory.create("Gold Card");
    console.log(goldCard);

    console.log(creditCardDatabase);
}

run();
