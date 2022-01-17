// ⚠️ Don't modify this code ⚠️
const sayHello = require("./callback");

const thisIsThePlayer = (callback) => {
  const player = { name: "Spartacus", life: 100, strength: 100, agility: 100 };
  callback(player);
};

thisIsThePlayer(sayHello);


const [numbers] = [1,2,3,4]
console.log(numbers)