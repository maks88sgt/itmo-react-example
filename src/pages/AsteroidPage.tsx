import { useContext, useRef } from "react";
import { DistanceSwitch } from "../components/DistanceSwitch";
import type { Asteroid } from "../lib/AstroidDTO";
import { ActionTypes, AppStateContext, DispatchContext } from "../App";
import { Link } from "react-router";
import { AsteroidCardContainer } from "../components/asteroid-card/AsteroidCardContainer";
import { AsteroidsList } from "../components/AsteroidsList";

export const AsteroidsPage = () => {
  const { isLoading, asteroids, isOnlyDangerous } =
    useContext<any>(AppStateContext);
  const { dispatch } = useContext(DispatchContext);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <nav>
        <Link to="/asteroids">Asteroids</Link>
        <Link to="/destroyment">Destroyment</Link>
      </nav>
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
