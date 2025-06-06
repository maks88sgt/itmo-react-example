import {  ActionTypes, type AppState } from "../App"
import { useStore } from "../state/StoreProvider";
import { useSelector } from "../state/useSelector";

export const DistanceSwitch = ()=>{
const store = useStore<AppState, { type: ActionTypes; payload: any }>()
 
   const {dispatch, } = store
 
     const isKilometers = useSelector((state: AppState)=>state.isKilometers)

    return <div className="filter-distance">
          <span onClick={()=>dispatch({type: ActionTypes.KILOMETERS, payload: true})} className={`distance-unit ${isKilometers ? "selected" : ""}`}>Расстояние в километрах</span>
          <span onClick={()=>dispatch({type: ActionTypes.KILOMETERS, payload: false})} className={`distance-unit ${!isKilometers ? "selected" : ""}`}>в дистанциях до Луны</span>
        </div>
}