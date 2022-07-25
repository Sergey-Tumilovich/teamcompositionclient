import _ from 'lodash';
import {
    CREATE_PLAYER,
    FETCH_PLAYERS,
    FETCH_PLAYER,
    EDIT_PLAYER,
    DELETE_PLAYER,
    MOVE_PLAYER_TO_TEAM
} from '../actions/types';

//object approach for a state

export default (state={}, action) =>{
    switch(action.type){
        case FETCH_PLAYERS://merge the records into the one object
            return { ...state, ..._.mapKeys(action.payload,'id')};
        case FETCH_PLAYER://create a new state object with new k-v pair
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_PLAYER://same for all single entity operations
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_PLAYER:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_PLAYER://create a new state object without specific key
            return _.omit(state, action.payload);
        case MOVE_PLAYER_TO_TEAM:
            return {...state, [action.payload.id]: action.payload };
        default:
            return state;
    }
}