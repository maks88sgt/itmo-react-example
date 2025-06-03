import type { Asteroid } from "../../lib/AstroidDTO";
import { AsteroidAction } from "./AsteroidAction";


export const AsteroidCard = (props: Asteroid & {isKilometers: boolean; handleAddToDestroyment: ()=>void}) => {

  const {isDangerous, name, distance, size, date, isKilometers, handleAddToDestroyment} = props

  return (
    <div className={`asteroid-card ${isDangerous ? "dangerous": "safe"}`}>
      <div className="asteroid-info">
        <h3 className="asteroid-name">{name}</h3>
        <div className="asteroid-details">
          <div className="detail-row">
            <span className="detail-label">Дата:</span>
            <span className="detail-value">{date}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Расстояние:</span>
            <span className="detail-value">{isKilometers ? `${distance.kilometers} км` : `${distance.lunar} расстояний до луны`}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Размер:</span>
            <span className="detail-value">{size} м</span>
          </div>
        </div>
      </div>
      <AsteroidAction isDangerous={isDangerous} handleAddToDestroyment={handleAddToDestroyment}/>
    </div>
  );
};
