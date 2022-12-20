import romanNumToNum from "./romanNumeralKata";

test("Convert roman numbers that are less than 5", () => {
  expect(romanNumToNum("I")).toBe(1);
});

test("Convert roman numbers that are less than 10", () => {
  expect(romanNumToNum("VII")).toBe(7);
});

test("Convert roman numbers greater than 40", () => {
  expect(romanNumToNum("LVIII")).toBe(58);
});
test("Higher roman numerals precede the lower roman numerals", () => {
  expect(romanNumToNum("IX")).toBe(9);
});

test("Convert complex roman numbers to Number", () => {
  expect(romanNumToNum("MMMCMXCIX")).toBe(3999);
});

test("Roman numbers are in uppercase", () => {
  expect(romanNumToNum("iv")).toBe(4);
});
