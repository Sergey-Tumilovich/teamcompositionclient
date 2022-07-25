import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import playerReducer from './playerReducer';
import selectedTeamReducer from './selectedTeamReducer';
import teamReducer from './teamReducer';

export default combineReducers({
  form: formReducer,
  players: playerReducer,
  teams: teamReducer,
  selected: selectedTeamReducer
});
