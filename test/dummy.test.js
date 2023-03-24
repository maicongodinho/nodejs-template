const { dummy } = require("../src/dummy");

describe("Validate the dummy", () => {
  test('it should return "this is a dummy"', () => {
    expect(dummy()).toBe("this is a dummy");
  });
});
