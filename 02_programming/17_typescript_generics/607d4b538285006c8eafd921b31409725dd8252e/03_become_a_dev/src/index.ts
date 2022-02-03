type Human = {
  name: string;
  age: number;
  knowsDev: boolean;
};

type Dev = Human & {
  knownLanguage: string;
};

function becomeADev(toto: Human): Dev {
  //const result = Object.assign(toto);

  const test: Dev = {
    name: toto.name,
    age: toto.age,
    knowsDev: true,
    knownLanguage: "JavaScript",
  };

  return test;
}

// Leave the line below for tests to work properly.
export { becomeADev };
