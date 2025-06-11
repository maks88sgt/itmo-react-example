import type { Asteroid } from "../lib/AstroidDTO";
import asteroidService from "./AsteroidsService";

jest.mock("../lib/config", () => ({
  config: {
    SECRET_KEY: process.env.SECRET_KEY || "DEMO_KEY",
    GET_REAL_ASTEROIDS: process.env.GET_REAL_ASTEROIDS,
  },
}));

describe("[UNIT] AsteroisService", () => {
  test("generateAsteroids should return array of Asteroids", () => {
    const result = asteroidService.generateAsteroids();
    expect(result).not.toBe(null);
    expect(Array.isArray(result)).toBe(true)
  });
  test("createAsteroid should return array Asteroid", () => {
    const result = asteroidService.createAsteroid();
    expect(result).not.toBe(null);
    expect(result.name).not.toBe(undefined)
  });
  test("generateAsteroids should call createAsteroid", () => {
    asteroidService.createAsteroid = jest.fn(()=>{
        return ({name: "Mock asteroid"} as Asteroid)
    })
    const result = asteroidService.generateAsteroids();
    expect(asteroidService.createAsteroid).toHaveBeenCalled()
    expect(asteroidService.createAsteroid).toHaveBeenCalledTimes(result.length)
  });
});
