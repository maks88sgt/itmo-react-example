import { Link } from "react-router"
import { ActionTypes, type AppState } from "../App";
import { AsteroidsList } from "../components/AsteroidsList";
import { useStore } from "../state/StoreProvider";

export const DestroymentPage = ()=>{
    const store = useStore<AppState, { type: ActionTypes; payload: any }>()
    
      const {getState} = store
    
      const { destroyment } = getState()

    return <div> <nav>
        <Link to="/asteroids">Asteroids</Link>
        <Link to="/destroyment">Destroyment</Link>
    </nav>

    <AsteroidsList asteroids={destroyment} isLoading={false}/>
    </div>
}