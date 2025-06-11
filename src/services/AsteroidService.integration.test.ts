
import asteroidService from "./AsteroidsService";

jest.mock("../lib/config", () => ({
  config: {
    SECRET_KEY: process.env.SECRET_KEY || "DEMO_KEY",
    GET_REAL_ASTEROIDS: process.env.GET_REAL_ASTEROIDS,
  },
}));

describe("[INTEGRATION] AsteroisService", () => {
  test("getRealAsteroids should return array of Asteroids", async () => {
    const result = await asteroidService.getRealAsteroids();
    expect(Array.isArray(result)).toBe(true)
    const {name, date, distance} = result[0]
    expect(typeof name).toBe("string")
    expect(typeof date).toBe("string")
    expect(typeof distance).toBe("object")
    expect(distance.kilometers).toBeDefined()
    expect(distance.lunar).toBeDefined()
  });
});
