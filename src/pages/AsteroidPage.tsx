import { useParams } from "react-router";
import asteroidService from "../services/AsteroidsService";
import { useEffect, useState } from "react";

export const AsteroidPage = ()=>{

    let {asteroidId = ""} = useParams();

    const [asteroid, setAsteroid] = useState(null)

    useEffect(()=>{
        if (asteroidId) {
            asteroidService.getAsteroid(asteroidId).then((aster) => setAsteroid(aster))
        }
       
    },[asteroidId])

    return <div>Asteroid page for {asteroidId}
    <div>{JSON.stringify(asteroid)}</div></div>
}