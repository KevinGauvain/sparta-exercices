// Paste your previous `Tree` class here.

// Code the class here.
class Tree {
  age: number;
  height: number;
  alive: boolean = true;

  constructor(age: number) {
    this.age = age;
    this.height = this.calculatorHeight(age);
  }

  calculatorHeight(age: number): number {
    if (age <= 9) {
      const ageOneToNine = 25 * age;
      return ageOneToNine;
    } else if (age >= 10 && age <= 20) {
      const ageTenToTwenty = 225 + 10 * (age - 9);
      return ageTenToTwenty;
    } else {
      const ageAfterTwenty = 335;
      return ageAfterTwenty;
    }
  }

  seed(age: number = 0, height: number = 0, alive: boolean = true): void {
    this.age = age;
    this.height = height;
    this.alive = alive;
  }
}

// const tree = new Tree(5);

// Leave the line below for tests to work properly.
export { Tree };
