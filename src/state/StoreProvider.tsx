import { createContext, useContext, type ReactNode } from "react";
import type Store from "./store";

type StoreContextType<State, Action> = Store<State, Action>;

const StoreContext = createContext<StoreContextType<any, any> | null>(null);

export function StoreProvider<State, Action>({
  store,
  children,
}: {
  store: Store<State, Action>;
  children: ReactNode;
}) {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export function useStore<State, Action>() {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("Cannot use useStore outside of StoreContext");
  }
  return store as Store<State, Action>;
}
