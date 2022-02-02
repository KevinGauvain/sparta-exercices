import { Tree } from "./Tree";

// Code your class here.

class OrangeTree extends Tree {
  oranges: string[] = [];

  constructor(age: number, oranges: string[]) {
    super(age);
    this.oranges = oranges;
  }

  ageOneYear(age: number): void {
    this.age = age++;
    this.height = this.calculatorHeight(age);
    // this.oranges = this.growOranges(age);
    this.alive = this.isAlive(age);
  }

  isAlive(age: number): boolean {
    if (age < 50) {
      return true;
    } else if (age > 100) {
      return false;
    } else if (age > 50 && age < 60) {
      return true; //20% de chande de mourir
    } else if (age > 60 && age < 70) {
      return true; //40% de chance de mourir
    } else if (age > 70 && age < 80) {
      return true; //60% de chance de mourir
    } else if (age > 80 && age < 90) {
      return true; // 80% de chance de mourir
    }
    // + il y a d'année + la proba d'être en vie diminue
    return true;
  }

  growOranges(age: number): void {
    if (age >= 5 && age <= 10) {
      const orangeFiveToTen = 10;
      for (let i = 0; i < orangeFiveToTen; i++) {
        this.oranges.push("🍊");
      }
    } else if (age >= 11 && age <= 20) {
      const orangeElevenToTwenty = 20;
      for (let i = 0; i < orangeElevenToTwenty; i++) {
        this.oranges.push("🍊");
      }
    } else if (age >= 21 && age <= 40) {
      const orangeTwentyOneToForty = 5;
      for (let i = 0; i < orangeTwentyOneToForty; i++) {
        this.oranges.push("🍊");
      }
    }
    // console.log("ligne 56-------------", this.growOranges(5));
    this.seed();
  }

  /*pickAnOrange(: string[]): number{
    if (this.oranges.length > 1) {
      return this.oranges //méthode - 1
    }
    }*/
}

// Leave the line below for tests to work properly.
export { OrangeTree };
