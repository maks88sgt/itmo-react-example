import type { AppState } from "../../App";
import type { Asteroid } from "../../lib/AstroidDTO";
import { useSelector } from "../../state/useSelector";

export const AsteroidDetails = ({
  distance,
  date,
  size,
}: Pick<Asteroid, "date" | "distance" | "size">) => {
  const isKilometers = useSelector((state: AppState) => state.isKilometers);
  return (
    <div className="asteroid-details">
      <div className="detail-row">
        <span className="detail-label">Дата:</span>
        <span className="detail-value">{date}</span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Расстояние:</span>
        <span className="detail-value">
          {isKilometers
            ? `${distance.kilometers} км`
            : `${distance.lunar} расстояний до луны`}
        </span>
      </div>
      <div className="detail-row">
        <span className="detail-label">Размер:</span>
        <span className="detail-value">{size} м</span>
      </div>
    </div>
  );
};
