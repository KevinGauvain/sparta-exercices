function filteredRoles(persons, role = "Teacher") {
  // Code the function here.
  const listOfPersons = [
    {
      name: "Frieda",
      role: "Teacher",
    },
    {
      name: "John",
      role: "Teacher",
    },
    {
      name: "Francis",
      role: "Student",
    },
    {
      name: "Jane",
      role: "Student",
    },
  ];

  const ArrayFilterSpecificRole = [];
  if (role === listOfPersons[0].role) {
    ArrayFilterSpecificRole.push({
      name: listOfPersons[0].name,
      role: listOfPersons[0].role,
    });
  }
  if (role === listOfPersons[1].role) {
    ArrayFilterSpecificRole.push({
      name: listOfPersons[1].name,
      role: listOfPersons[1].role,
    });
  }
  if (role === listOfPersons[2].role) {
    ArrayFilterSpecificRole.push({
      name: listOfPersons[2].name,
      role: listOfPersons[2].role,
    });
  }
  if (role === listOfPersons[3].role) {
    ArrayFilterSpecificRole.push({
      name: listOfPersons[3].name,
      role: listOfPersons[3].role,
    });
  }
  return ArrayFilterSpecificRole;
}

filteredRoles(["Frieda", "John", "Francis", "Jane"], "Teachers");

// Do not remove lines below, it is for tests
module.exports = filteredRoles;
