import { useContext } from "react"
import { AppStateContext, DispatchContext, ActionTypes } from "../App"

export const DistanceSwitch = ()=>{

    const {isKilometers} = useContext<any>(AppStateContext)
    const {dispatch} = useContext<any>(DispatchContext)

    return <div className="filter-distance">
          <span onClick={()=>dispatch({type: ActionTypes.KILOMETERS, payload: true})} className={`distance-unit ${isKilometers ? "selected" : ""}`}>Расстояние в километрах</span>
          <span onClick={()=>dispatch({type: ActionTypes.KILOMETERS, payload: false})} className={`distance-unit ${!isKilometers ? "selected" : ""}`}>в дистанциях до Луны</span>
        </div>
}