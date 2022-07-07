// Need to create a Tamagotchi game
// ask user to pic a pet and then ask to name it
// create a tamagotchi class
// have at least 3 different ones to choose from
// once user selecs one, start game
// have some sort of animation in the middle of the page, either jumping or moving around
// display tamagotchi of choice
// display hunger, sleepiness, boredom and age
// display buttons to feed pet turn off lights and play with pet
// increase pets age every 2 minutes
// when pet reaches 5 years old have pet grow
// have pet die if not fed for over 2 minutes
// have pet die when reach 15 years old

//alert("Welcome to Tamagotchi!");

let name = "";
let anim = "";
let type = ["robot", "creeter", "alien"];
let petIsDead;
petIsDead = "your pet died";
let bornAge = 0;
let startHunger = 0;
let startSleepiness = false;

class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = startHunger;
    this.sleepiness = startSleepiness;
    this.boredom = 0;
    this.age = bornAge;
  }
  isBorn() {
    return this.hunger > 0 && this.boredom < 10 && this.age < 15;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getHunger() {
    return this.hunger;
  }
  ageUp() {
    if (!this.isBorn) {
      alert(petIsDead);
    }
  }
  pickPet(type) {
    this.type.push(type);
  }
}
const Pet = new Tamagotchi(`${this.name}`);

console.log(Pet);
