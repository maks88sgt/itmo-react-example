import { memo } from "react";
import Dino from "../../assets/dino.svg";

export const AsteroidAction = memo(
  ({
    isDangerous,
    handleAddToDestroyment,
  }: {
    isDangerous: boolean;
    handleAddToDestroyment: () => void;
  }) => {
    return (
      <>
        <div className="asteroid-status">
          <div className="status-label">
            Оценка:{" "}
            <span className={`status-value ${isDangerous ? "danger" : ""}`}>
              {isDangerous ? "опасен" : "не опасен"}
            </span>
          </div>
          <button className="destroy-button" onClick={handleAddToDestroyment}>
            На уничтожение
          </button>
        </div>
        <img src={Dino} />
      </>
    );
  }
);

AsteroidAction.displayName = "AsteroidActions";
