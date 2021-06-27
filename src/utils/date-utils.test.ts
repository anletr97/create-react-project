import DateUtils from "./date-utils";

describe("Test Date Utils", () => {
  it("I dont know", () => {
    expect(DateUtils.getDaysInMonth(2021, 6)).toStrictEqual(new Date(2021, 2));
  });
});
