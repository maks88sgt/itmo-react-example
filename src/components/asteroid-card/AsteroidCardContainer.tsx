import { useCallback } from "react";
import { ActionTypes, type AppState } from "../../App";
import { AsteroidCard } from "./AstroidCard";
import type { Asteroid } from "../../lib/AstroidDTO";
import { useStore } from "../../state/StoreProvider";
import { useSelector } from "../../state/useSelector";
import { useNavigate } from "react-router";

export const AsteroidCardContainer = (props: Asteroid) => {
 const store = useStore<AppState, { type: ActionTypes; payload: any }>()
 
   const {dispatch} = store
 
  const handleAddToDestroyment = useCallback(() => {
    dispatch({ type: ActionTypes.DESTROYMENT, payload: props });
  }, [props.id]);

  const navigate = useNavigate();

  const navigateTo = useCallback(
    ()=>{navigate(props.id)
  }, [props.id]);

  const isKilometers = useSelector((state: AppState) => state.isKilometers);


  return (
    <AsteroidCard
      {...props}
      handleAddToDestroyment={handleAddToDestroyment}
      navigateTo={navigateTo}
      isKilometers={isKilometers}
    />
  );
};
