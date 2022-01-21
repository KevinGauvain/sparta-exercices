const machine = {
  // Complete here
  litersOfCoffee: "",
  fillWithLitersOfCoffee: function (liters) {
    this.litersOfCoffee = liters;
    console.log(this.litersOfCoffee);
  },
  expresso: function () {
    if (this.litersOfCoffee >= 0.08) {
      this.litersOfCoffee = this.litersOfCoffee - 0.08;
      return true;
    } else {
      return false;
    }
  },
  longCoffee: function () {
    if (this.litersOfCoffee >= 0.2) {
      this.litersOfCoffee = this.litersOfCoffee - 0.16;
      return true;
    } else {
      return false;
    }
  },
};

module.exports = machine;
