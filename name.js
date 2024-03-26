class Leopard {
    constructor(name, spots, age) {
        this.name = name;
        this.spots = spots;
        this.age = age;
    }

    roar() {
        console.log(`ROAR! I'm ${this.name} the leopard with ${this.spots} spots and I'm ${this.age} years old.`);
    }
}

// Create a new Leopard object
const myLeopard = new Leopard('Leo', 50, 6);

// Make the Leopard roar
myLeopard.roar();
