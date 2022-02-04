import { toWords } from "./index";

test("Type de mon return", function () {
  expect.assertions(1);
  const myResult = toWords("TroTro@- - est; meilleur que PepaPig!");
  const test = typeof myResult;
  expect(test).toEqual("object"); // object ou array ??? comment dire array ???
});

test("Le retour de la fonction est juste", function () {
  expect.assertions(2);
  expect(toWords("TroTro@- - est; meilleur que PepaPig!")).toEqual([
    "TroTro@-",
    "-",
    "est;",
    "meilleur",
    "que",
    "PepaPig",
  ]);

  expect(toWords("Test: on essaie que virgule, soit : supprimer. C'est parti")).toEqual([
    "Test",
    "on",
    "essaie",
    "que",
    "virgule",
    "soit",
    "supprimer",
    "C'est",
    "parti",
  ]);
});
// expect , .
// expect type de mon return variable my result = towords ou expect to words
