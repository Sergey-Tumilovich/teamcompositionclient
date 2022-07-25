import { FETCH_TEAM } from "../actions/types";

const INTIAL_STATE ={
    selectedTeam:undefined
}

export default (state=INTIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_TEAM:
            return { ...state, selectedTeam:action.payload};
        default:
            return state;
    }
}