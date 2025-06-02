import { useContext } from "react";
import { AppStateContext } from "../App";
import type { Asteroid } from "../lib/AstroidDTO";
import Dino from "../assets/dino.svg"

export const AsteroidCard = (props: Asteroid) => {

  const {isDangerous, name, distance, size, date} = props

  const {isKilometers} = useContext<any>(AppStateContext)

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
      <div className="asteroid-status">
        <div className="status-label">
          Оценка: <span className={`status-value ${isDangerous ? "danger": ""}`}>{isDangerous ? "опасен" : "не опасен"}</span>
        </div>
        <button className="destroy-button">На уничтожение</button>
      </div>
      <img src={Dino}/>
    </div>
  );
};
