type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(
  userName: string[],
  userAge: number[],
  userCountries: string[],
  userTravel: boolean[],
): Profile[] {
  // Code here
  const myObject = [];

  for (let i = 0; i < userName.length; i++) {
    myObject.push({ name: userName[i], age: userAge[i], country: userCountries[i], haveTraveled: userTravel[i] });
  }
  return myObject;
  // console.log("-----test-------", myObject);
}
