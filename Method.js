// Define a Car class
class Car {
    constructor(make, model, year, color, fuelLevel = 100, speed = 0) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuelLevel = fuelLevel; // in percentage
        this.speed = speed; // in km/h
        this.isEngineOn = false;
    }

    // Method to start the car engine
    startEngine() {
        if (!this.isEngineOn && this.fuelLevel > 0) {
            this.isEngineOn = true;
            console.log("Engine started.");
        } else if (this.isEngineOn) {
            console.log("Engine is already running.");
        } else {
            console.log("No fuel. Please refuel to start the engine.");
        }
    }

    // Method to stop the car engine
    stopEngine() {
        if (this.isEngineOn) {
            this.isEngineOn = false;
            this.speed = 0;
            console.log("Engine stopped.");
        } else {
            console.log("Engine is already off.");
        }
    }

    // Method to accelerate the car
    accelerate(speedIncrease) {
        if (this.isEngineOn) {
            this.speed += speedIncrease;
            console.log(`Accelerating. Current speed: ${this.speed} km/h`);
        } else {
            console.log("Engine is not running. Please start the engine to accelerate.");
        }
    }

    // Method to decelerate the car
    decelerate(speedDecrease) {
        if (this.isEngineOn) {
            this.speed -= speedDecrease;
            if (this.speed < 0) {
                this.speed = 0;
            }
            console.log(`Decelerating. Current speed: ${this.speed} km/h`);
        } else {
            console.log("Engine is not running.");
        }
    }

    // Method to refuel the car
    refuel(fuelAmount) {
        if (this.isEngineOn) {
            console.log("Please turn off the engine before refueling.");
        } else {
            this.fuelLevel += fuelAmount;
            if (this.fuelLevel > 100) {
                this.fuelLevel = 100;
            }
            console.log(`Refueled. Current fuel level: ${this.fuelLevel}%`);
        }
    }
}

// Create an instance of Car
const myCar = new Car('Toyota', 'Camry', 2022, 'Silver');

// Test the Car class methods
myCar.startEngine();
myCar.accelerate(50);
myCar.decelerate(20);
myCar.stopEngine();
myCar.refuel(20);
