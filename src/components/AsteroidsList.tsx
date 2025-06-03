import type { Asteroid } from "../lib/AstroidDTO";
import { AsteroidCardContainer } from "./asteroid-card/AsteroidCardContainer";

export const AsteroidsList = ({
  isLoading,
  asteroids,
}: {
  isLoading: boolean;
  asteroids: Asteroid[];
}) => {
  return (
    <div>
      {isLoading
        ? "Loading ... "
        : asteroids?.map((asteroid: Asteroid) => {
            return <AsteroidCardContainer key={asteroid.name} {...asteroid} />;
          })}
    </div>
  );
};
