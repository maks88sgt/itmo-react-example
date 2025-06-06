type Listener = ()=>void

export class Store<State, Action> {
    private state: State
    private reducer: (state: State, action: Action) => State
    private listeners: Set<Listener> = new Set()

    constructor(initialState: State, reducer: (state: State, action: Action) => State) {
        this.state = initialState
        this.reducer = reducer
    }

    getState = ()=>{
        return this.state
    }

    dispatch = (action: Action)=>{
        this.state = this.reducer(this.state, action)
        this.listeners.forEach((listener) => listener());
    }

    subscribe = (listener: Listener)=>{
        this.listeners.add(listener)
        return ()=>{
            this.listeners.delete(listener)
        }
    }
}

export default Store