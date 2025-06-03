import { useContext } from "react";
import { Link } from "react-router"
import { AppStateContext } from "../App";
import { AsteroidsList } from "../components/AsteroidsList";

export const DestroymentPage = ()=>{
    const {destroyment } = useContext<any>(AppStateContext);
    return <div> <nav>
        <Link to="/asteroids">Asteroids</Link>
        <Link to="/destroyment">Destroyment</Link>
    </nav>

    <AsteroidsList asteroids={destroyment} isLoading={false}/>
    </div>
}