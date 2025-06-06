import { useRef, useSyncExternalStore } from "react";
import { useStore } from "./StoreProvider";

export function useSelector<State, Action, Selected> (selector: (state: State)=>Selected): Selected {
    const store = useStore<State, Action>()

    const lastSelected = useRef(selector(store.getState()))

    const getSnapshot = ()=>{
        const nextSelected = selector(store.getState());
        if(JSON.stringify(lastSelected.current) !== JSON.stringify(nextSelected)){
            lastSelected.current = nextSelected
        }
        return  lastSelected.current
    }

    return useSyncExternalStore(store.subscribe, getSnapshot)

}