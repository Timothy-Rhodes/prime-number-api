const request = require("supertest");
const app = require("../server");
const { maxNumber } = require("../src/constants");
describe("GET /is_prime API", () => {
  test("should return true for 19", async () => {
    const res = await request(app).get("/is_prime?number=19");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ number: "19", is_prime: true });
  });

  test("should return false for 20", async () => {
    const res = await request(app).get("/is_prime?number=20");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ number: "20", is_prime: false });
  });

  test("should return 400 for invalid input", async () => {
    const res = await request(app).get("/is_prime?number=abc");
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  test("should return 400 for missing parameter", async () => {
    const res = await request(app).get("/is_prime");
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });

  test("should return true for large prime number", async () => {
    const res = await request(app).get("/is_prime?number=4294967291");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ number: "4294967291", is_prime: true });
  });

  test("should return false for negative number", async () => {
    const res = await request(app).get("/is_prime?number=-19");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ number: "-19", is_prime: false });
  });

  test("should return false for 0", async () => {
    const res = await request(app).get("/is_prime?number=0");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ number: "0", is_prime: false });
  });

  test("should return false for 1", async () => {
    const res = await request(app).get("/is_prime?number=1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ number: "1", is_prime: false });
  });

  test("should handle large numbers, non-prime", async () => {
    const res = await request(app).get("/is_prime?number=1234567890123456789");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
      number: "1234567890123456789",
      is_prime: false,
    });
  });

  test("should handle very large numbers, prime", async () => {
    const res = await request(app).get("/is_prime?number=9223372036854775783");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ number: "9223372036854775783", is_prime: true });
  });

  test(`should fail for numbers greater than maxNumber: ${maxNumber}`, async () => {
    const res = await request(app).get(
      "/is_prime?number=123456789012345678900"
    );
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({
      error: `Number exceeds the maximum limit of ${maxNumber}.`,
    });
  });
});
