import { caesar } from "./caesar-cipher";

test("cipher", () => {
  expect(caesar("abcd", 1)).toBe("bcde");
  expect(caesar("xyza", 3)).toBe("abcd");
  expect(caesar("Hello friend", 1)).toEqual("Ifmmp gsjfoe");
  expect(() => caesar("hello.", 1)).toThrow(Error);
  expect(() => caesar("hello", 0)).toThrow(Error);
});
