import { useCallback, useContext } from "react";
import { ActionTypes, AppStateContext, DispatchContext } from "../../App";
import { AsteroidCard } from "./AstroidCard";
import type { Asteroid } from "../../lib/AstroidDTO";

export const AsteroidCardContainer = (props: Asteroid) => {
  const { isKilometers } = useContext<any>(AppStateContext);
  const { dispatch } = useContext(DispatchContext);

  const handleAddToDestroyment = useCallback(() => {
    dispatch({ type: ActionTypes.DESTROYMENT, payload: props });
  }, [props.id]);

  return (
    <AsteroidCard
      {...props}
      isKilometers={isKilometers}
      handleAddToDestroyment={handleAddToDestroyment}
    />
  );
};
