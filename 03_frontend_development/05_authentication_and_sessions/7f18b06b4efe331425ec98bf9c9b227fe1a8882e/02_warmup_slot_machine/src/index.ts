// Code here
function slotMachine(toto: [string | number | boolean, string | number | boolean, string | number | boolean]): boolean {
  if (toto[0] === toto[1] && toto[1] === toto[2]) {
    //console.log(true);
    return true;
  } else {
    //console.log(false);
    return false;
  }
}

console.log(test);

export { slotMachine };
