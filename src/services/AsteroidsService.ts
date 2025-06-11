import type { Asteroid } from "../lib/AstroidDTO";
import {config} from "../lib/config"
import axios from "axios"

class AsteroidService {
  private key: string
  constructor() {
    this.key = config.SECRET_KEY;

  }

  async getAsteroids(): Promise<Asteroid[]> {
    const isGetRealAsteroids = config.GET_REAL_ASTEROIDS;

    if (isGetRealAsteroids === "true") {
      const asteroids = await this.getRealAsteroids()
      return asteroids;
    }
    return this.generateAsteroids();
  }

  async getRealAsteroids() {
    return await axios.get<undefined, {data: {near_earth_objects: any}}>(`https://api.nasa.gov/neo/rest/v1/feed`, {params: {api_key: this.key}})
      .then((result) => {
        let asteroids: Asteroid[] = [];

        const ast = result.data.near_earth_objects;

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


  async getAsteroid(asteroidId: string){
    return await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${this.key}`)
      .then((result) => {
        return result.data
      })
  }

}

const asteroidService = new AsteroidService();

export default asteroidService;
