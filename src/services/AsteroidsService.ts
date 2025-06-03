import type { Asteroid } from "../lib/AstroidDTO";

class AsteroidService {
  constructor() {}

  async getAsteroids(): Promise<Asteroid[]> {
    const isGetRealAsteroids = import.meta.env.VITE_GET_REAL_ASTEROIDS;

    if (isGetRealAsteroids === "true") {
      const asteroids = await this.getRealAsteroids()
      return asteroids;
    }
    return this.generateAsteroids();
  }

  async getRealAsteroids() {
    const key = import.meta.env.VITE_SECRET_KEY || "DEMO_KEY";

    return await fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${key}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((result) => {
        let asteroids: Asteroid[] = [];

        const ast = result.near_earth_objects;

        for (let key in ast) {
          const mappedAsteroids = ast[key].map((item: any) => ({
              name: item.name,
              id: item.id,
              date: item.close_approach_data[0].close_approach_date,
              distance: {
                lunar: item.close_approach_data[0].miss_distance.lunar,
                kilometers: item.close_approach_data[0].miss_distance.kilometers,
              },
              size: (item.estimated_diameter.kilometers.estimated_diameter_max + item.estimated_diameter.kilometers.estimated_diameter_min)/2,
              isDangerous: item.is_potentially_hazardous_asteroid,
            }))
          asteroids = asteroids.concat(
            mappedAsteroids
          );
        }

        return asteroids;
      });
  }

  generateAsteroids() {
    const arr = new Array(this.getRandomInt(4, 10)).fill({});

    return arr.map(() => this.createAsteroid());
  }

  getRandomInt(min: number, max: number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

  createAsteroid(): Asteroid {
    return {
      date: ["30-05-2025", "01-06-2025", "02-06-2025"][this.getRandomInt(0, 2)],
      distance: {
        kilometers: this.getRandomInt(10000, 50000000),
        lunar: this.getRandomInt(0, 150),
      },
      id: Date.now().toString(),
      isDangerous: !!this.getRandomInt(0, 1),
      name:
        ["ASD", "TST", "GDSD"][this.getRandomInt(0, 2)] +
        this.getRandomInt(0, 1000000),
      size: this.getRandomInt(50, 1500),
    };
  }
}

const asteroidService = new AsteroidService();

export default asteroidService;
