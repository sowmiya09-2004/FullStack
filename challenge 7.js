// Object for Mark
let mark = {
  fullName: 'Mark Miller',
  mass: 78, // in kg
  height: 1.69, // in meters
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

// Object for John
let john = {
  fullName: 'John Smith',
  mass: 92, // in kg
  height: 1.95, // in meters
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

// Calculate BMI
mark.calcBMI();
john.calcBMI();

// Compare BMI and log to console
if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else {
  console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
}