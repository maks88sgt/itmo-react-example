import { memo } from "react";
import { Button } from "@mui/material";

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
          <Button onClick={handleAddToDestroyment} variant="contained" color="error">На уничтожение</Button>
        </div>
      </>
    );
  }
);

AsteroidAction.displayName = "AsteroidActions";
