const { isPrime } = require("../src/services/prime");

describe("Prime Number Function", () => {
  test("2 is prime", () => {
    expect(isPrime(2)).toBe(true);
  });

  test("3 is prime", () => {
    expect(isPrime(3)).toBe(true);
  });

  test("4 is not prime", () => {
    expect(isPrime(4)).toBe(false);
  });

  test("19 is prime", () => {
    expect(isPrime(19)).toBe(true);
  });

  test("Negative numbers are not prime", () => {
    expect(isPrime(-7)).toBe(false);
  });

  test("0 is not prime", () => {
    expect(isPrime(0)).toBe(false);
  });

  test("1 is not prime", () => {
    expect(isPrime(1)).toBe(false);
  });

  test("Large prime number 2147483647 (largest 32-bit prime)", () => {
    expect(isPrime(2147483647)).toBe(true);
  });

  test("Large non-prime number 2147483646", () => {
    expect(isPrime(2147483646)).toBe(false);
  });

  // All these numbers are prime 31, 331, 3331, 33331, 333331, 3333331, 33333331
  test("31 is prime", () => {
    expect(isPrime(31)).toBe(true);
  });

  test("331 is prime", () => {
    expect(isPrime(331)).toBe(true);
  });

  test("3331 is prime", () => {
    expect(isPrime(3331)).toBe(true);
  });

  test("33331 is prime", () => {
    expect(isPrime(33331)).toBe(true);
  });

  test("333331 is prime", () => {
    expect(isPrime(333331)).toBe(true);
  });

  test("3333331 is prime", () => {
    expect(isPrime(3333331)).toBe(true);
  });

  // But 333333331 is not prime
  test("333333331 is not prime", () => {
    expect(isPrime(333333331)).toBe(false);
  });

  test("Largest prime number that can be represented in JavaScript", () => {
    expect(isPrime(9223372036854775783n)).toBe(true);
  });

  test("Largest non-prime number that can be represented in JavaScript", () => {
    expect(isPrime(9223372036854775784n)).toBe(false);
  });
});
