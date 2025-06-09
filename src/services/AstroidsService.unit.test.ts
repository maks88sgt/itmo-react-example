import asteroidService from "./AsteroidsService"

test("AsteroisService should return array of Asteroids", ()=>{
    const result = asteroidService.generateAsteroids();
    expect(result).not.toBe(null)
})