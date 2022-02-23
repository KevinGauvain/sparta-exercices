type Person = {
  firstName: string;
  lastName: string;
};

export function parseName(name: string): Person {
  const splited = name.split(" ");
  console.log(splited);
  const result = {
    firstName: splited[0],
    lastName: splited[1],
  };
  return result;
}
