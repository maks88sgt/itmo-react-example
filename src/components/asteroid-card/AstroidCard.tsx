import type { Asteroid } from "../../lib/AstroidDTO";
import { AsteroidAction } from "./AsteroidAction";
import { AsteroidDetails } from "./AsteroidDetails";

export const AsteroidCard = (
  props: Asteroid & {
    handleAddToDestroyment: () => void;
    isKilometers: boolean;
    navigateTo: () => void;
  }
) => {
  const {
    isDangerous,
    name,
    distance,
    size,
    date,
    handleAddToDestroyment,
    isKilometers,
    navigateTo
  } = props;

  return (
    <div
      className={`asteroid-card ${isDangerous ? "dangerous" : "safe"}`}
      onClick={navigateTo}
      data-testId={"AsteroidCard"}
    >
      <div className="asteroid-info">
        <h3 className="asteroid-name">{name}</h3>
        <AsteroidDetails
          distance={distance}
          size={size}
          date={date}
          isKilometers={isKilometers}
        />
      </div>
      <AsteroidAction
        isDangerous={isDangerous}
        handleAddToDestroyment={handleAddToDestroyment}
      />
    </div>
  );
};
