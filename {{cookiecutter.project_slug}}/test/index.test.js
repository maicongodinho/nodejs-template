const { dummy } = require("../src");

describe("Validate the dummy", () => {
  test('it should return "this is a dummy"', () => {
    expect(dummy()).toBe("this is a dummy");
  });
});
