import { greet } from "./index";

test("Le retour attendu de la fonction est juste sans prénom", function () {
  expect.assertions(1);
  expect(greet()).toBe("Hello WORLD!");
});

test("Le retour de la fonction est juste pour un prénom", function () {
  expect.assertions(1);
  expect(greet("Francis")).toBe("Hello FRANCIS!");
});
