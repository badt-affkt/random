// Car object constructor
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.currentSpeed = 0;
}

// Method to accelerate the car
Car.prototype.accelerate = function(speedIncrement) {
    this.currentSpeed += speedIncrement;
    console.log(`Accelerating to ${this.currentSpeed} km/h`);
};

// Method to brake the car
Car.prototype.brake = function(speedDecrement) {
    if (this.currentSpeed - speedDecrement >= 0) {
        this.currentSpeed -= speedDecrement;
    } else {
        this.currentSpeed = 0;
    }
    console.log(`Braking to ${this.currentSpeed} km/h`);
};

// Method to display car details
Car.prototype.displayDetails = function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
};

// Create a new Car object
const myCar = new Car("Toyota", "Camry", 2022, "Blue");

// Display car details
myCar.displayDetails();

// Accelerate the car
myCar.accelerate(50);

// Brake the car
myCar.brake(20);
