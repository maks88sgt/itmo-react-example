import { useContext, useRef } from "react";
import { AsteroidCard } from "../components/AstroidCard";
import { DistanceSwitch } from "../components/DistanceSwitch";
import type { Asteroid } from "../lib/AstroidDTO";
import { AppStateContext } from "../App";
import { Link } from "react-router";

export const AsteroidsPage = () => {
  const { isLoading, asteroids } = useContext<any>(AppStateContext);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
    <nav>
        <Link to="/asteroids">Asteroids</Link>
        <Link to="/destroyment">Destroyment</Link>
    </nav>
      <div className="filters" ref={ref}>
        <div className="filter-checkbox">
          <input type="checkbox" id="dangerous-only" />
          <label htmlFor="dangerous-only">Показать только опасные</label>
        </div>
        <DistanceSwitch />
      </div>
      <div>
        {isLoading
          ? "Loading ... "
          : asteroids?.map((asteroid: Asteroid) => {
              return <AsteroidCard key={asteroid.name} {...asteroid} />;
            })}

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
