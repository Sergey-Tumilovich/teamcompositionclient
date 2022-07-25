import _ from 'lodash';
import {
    CREATE_TEAM,
    FETCH_TEAMS,
    FETCH_TEAM,
    EDIT_TEAM,
    DELETE_TEAM
} from '../actions/types';

//object approach for a state

export default (state={}, action) =>{
    switch(action.type){
        case FETCH_TEAMS://merge the records into the one object
            return { ...state, ..._.mapKeys(action.payload,'id')};
        case FETCH_TEAM://create a new state object with new k-v pair
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_TEAM://same for all single entity operations
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_TEAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_TEAM://create a new state object without specific key
            return _.omit(state, action.payload);
        default:
            return state;
    }
}