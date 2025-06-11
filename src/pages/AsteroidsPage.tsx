import { useEffect, useRef } from "react";
import { DistanceSwitch } from "../components/DistanceSwitch";
import type { Asteroid } from "../lib/AstroidDTO";
import { ActionTypes, type AppState } from "../App";
import { AsteroidsList } from "../components/AsteroidsList";
import { useStore } from "../state/StoreProvider";
import AsteroidService from "../services/AsteroidsService";
import { useSelector } from "../state/useSelector";

export const AsteroidsPage = () => {
  const store = useStore<AppState, { type: ActionTypes; payload: any }>()

  const {dispatch} = store

  const isLoading = useSelector((state: AppState)=>state.isLoading)
  const asteroids = useSelector((state: AppState)=>state.asteroids)
  const isOnlyDangerous = useSelector((state: AppState)=>state.isOnlyDangerous)

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AsteroidService.getAsteroids().then((result:Asteroid[]) => {
      dispatch({type: ActionTypes.LOADING, payload: false});
      dispatch({type: ActionTypes.ASTEROIDS, payload: result});
    });
  }, []);


  return (
    <>
      <div className="filters" ref={ref}>
        <div
          className="filter-checkbox"
         
        >
          <input type="checkbox" id="dangerous-only" checked={isOnlyDangerous}  onChange={() => {
            dispatch({ type: ActionTypes.DANGEROUS, payload: !isOnlyDangerous });
          }}/>
          <label htmlFor="dangerous-only">Показать только опасные</label>
        </div>
        <DistanceSwitch />
      </div>
      <div>
        <AsteroidsList
          asteroids={
            isOnlyDangerous ? asteroids.filter((it: Asteroid) => it.isDangerous) : asteroids
          }
          isLoading={isLoading}
        />
        <button
          className="go-to-top"
          onClick={() => {
            if (ref.current) {
              ref.current.scrollIntoView();
            }
          }}
        >
          Go to Top
        </button>
      </div>
    </>
  );
};
