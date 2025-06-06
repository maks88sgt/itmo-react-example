import type { Asteroid } from "../../lib/AstroidDTO";
import { AsteroidAction } from "./AsteroidAction";
import { AsteroidDetails } from "./AsteroidDetails";


export const AsteroidCard = (props: Asteroid & {handleAddToDestroyment: ()=>void}) => {

  const {isDangerous, name, distance, size, date, handleAddToDestroyment} = props

  return (
    <div className={`asteroid-card ${isDangerous ? "dangerous": "safe"}`}>
      <div className="asteroid-info">
        <h3 className="asteroid-name">{name}</h3>
        <AsteroidDetails distance={distance} size={size} date={date}/>
      </div>
      <AsteroidAction isDangerous={isDangerous} handleAddToDestroyment={handleAddToDestroyment}/>
    </div>
  );
};
