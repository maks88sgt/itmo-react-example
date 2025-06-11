import type { Asteroid } from "../../lib/AstroidDTO";

export const AsteroidDetails = ({
  distance,
  date,
  size,
  isKilometers
}: Pick<Asteroid, "date" | "distance" | "size"> & {isKilometers: boolean}) => {
  
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
