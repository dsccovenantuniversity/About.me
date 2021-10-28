class HumanBeing {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName() {
        return this.firstName + " " + this.lastName
    }
}

new HumanBeing("Israel", "Galadima").fullName

// This script shows that I am a human being and my name is Israel Galadima