import { helloSailor } from "./index";

test("The print waiting is good for string", function () {
  expect.assertions(2);
  const test = jest.spyOn(console, "log");
  test.mockImplementation(() => {});
  helloSailor("Batman");
  expect(test).toHaveBeenCalled();
  expect(test).toHaveBeenCalledWith("Howdy Batman!");
  test.mockRestore();
});

test("The print waiting is good for nothing", function () {
  expect.assertions(2);
  const test = jest.spyOn(console, "log");
  test.mockImplementation(() => {});
  helloSailor();
  expect(test).toHaveBeenCalled();
  expect(test).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
  test.mockRestore();
});
