import {
  createContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import AsteroidService from "./services/AsteroidsService";
import type { Asteroid } from "./lib/AstroidDTO";
import { Routes, Route, Navigate } from "react-router";
import { AsteroidsPage } from "./pages/AsteroidPage";
import { DestroymentPage } from "./pages/DestroymentPage";


type AppState = {
  isLoading: boolean,
  asteroids: Asteroid[],
  destroyment: Asteroid[],
  isKilometers: boolean,
  isOnlyDangerous: boolean,
}

const initialAppState = {
  isLoading: true,
  asteroids: [],
  destroyment: [],
  isKilometers: true,
  isOnlyDangerous: false,
};

export enum ActionTypes {
  LOADING = "loading",
  ASTEROIDS = "astroids",
  KILOMETERS = "kilometers",
  DANGEROUS = "dangerous",
  DESTROYMENT = "destroyment",
}

function appReducer(state: AppState, action: { type: ActionTypes; payload: any }) {
  switch (action.type) {
    case ActionTypes.LOADING:
      return { ...state, isLoading: action.payload };
    case ActionTypes.ASTEROIDS:
      return { ...state, asteroids: action.payload };
    case ActionTypes.KILOMETERS:
      return { ...state, isKilometers: action.payload };
    case ActionTypes.DANGEROUS:
      return { ...state, isOnlyDangerous: action.payload };
    case ActionTypes.DESTROYMENT:
      return { ...state, destroyment: [...state.destroyment, action.payload]};
    default:
      return state;
  }
}

export const AppStateContext = createContext<AppState>(initialAppState);
export const DispatchContext = createContext<any>(null);

function App() {

  const [state, dispatch] = useReducer(appReducer, initialAppState)


  useEffect(() => {
    AsteroidService.getAsteroids().then((result) => {
      dispatch({type: ActionTypes.LOADING, payload: false});
      dispatch({type: ActionTypes.ASTEROIDS, payload: result});
    });
  }, []);

  return (
    <AppStateContext.Provider
      value={state}
    >
      <DispatchContext.Provider
      value={{dispatch}}
    >
    <Routes>
      <Route path="/asteroids" element={<AsteroidsPage />} />
      <Route path="/destroyment" element={<DestroymentPage />} />
      <Route path="*" element={<Navigate to="/asteroids" />} />
    </Routes>

          </DispatchContext.Provider>
    </AppStateContext.Provider>
  );
}


export default App