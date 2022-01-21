// Complete and add needed car properties:
const car = {
  speed: 0,
  distance: 0,
  start: function () {
    this.speed = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed: function (speed) {
    car.speed = speed;
    return this;
  },
  drive: function (minutes) {
    car.distance = (this.speed * minutes) / 60 + this.distance;
    return this;
  },
  showDistance: function () {
    console.log(`${car.distance} Km`);
    return this;
  },
};

module.exports = car;

/* showDistance: function () {
    this.distancesCum = this.distancesCum + this.Distance;
    console.log(this.distancesCum + " Km");
    return this;
  }, */
