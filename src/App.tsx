import type { Asteroid } from "./lib/AstroidDTO";
import { Routes, Route, Navigate } from "react-router";
import { AsteroidsPage } from "./pages/AsteroidPage";
import { DestroymentPage } from "./pages/DestroymentPage";
import { AppNavigation } from "./components/AppNavigation";
import { StoreProvider } from "./state/StoreProvider";
import Store from "./state/store";


export type AppState = {
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
  console.log(action)
  switch (action.type) {
    case ActionTypes.LOADING:
      state.isLoading = action.payload
      return state;
    case ActionTypes.ASTEROIDS:
      state.asteroids = action.payload
      return state;
    case ActionTypes.KILOMETERS:
      state.isKilometers = action.payload
      return state;
    case ActionTypes.DANGEROUS:
      state.isOnlyDangerous = action.payload
      return state;
    case ActionTypes.DESTROYMENT:
      state.destroyment = action.payload
      return state;
    default:
      return state;
  }
}

function App() {


  return (
    <StoreProvider store={new Store<AppState, { type: ActionTypes; payload: any }>(initialAppState, appReducer)}>
      <AppNavigation/>
    <Routes>
      <Route path="/asteroids" element={<AsteroidsPage />} />
      <Route path="/destroyment" element={<DestroymentPage />} />
      <Route path="*" element={<Navigate to="/asteroids" />} />
    </Routes></StoreProvider>
  );
}


export default App