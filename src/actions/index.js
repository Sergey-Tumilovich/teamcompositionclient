import db from '../apis/db';
import history from '../components/history';

import { 
  CREATE_PLAYER,
  FETCH_PLAYERS,
  FETCH_PLAYER,
  EDIT_PLAYER,
  DELETE_PLAYER,
  CREATE_TEAM,
  FETCH_TEAM,
  FETCH_TEAMS,
  EDIT_TEAM,
  DELETE_TEAM,
  MOVE_PLAYER_TO_TEAM,
  MOVE_PLAYER_FROM_TEAM
} 
from './types';

//-----------PLAYERS-----------//

export const createPlayer = formValues => async dispatch =>{
  const response = await db.post('/players', formValues);

  dispatch({type:CREATE_PLAYER, payload: response.data});
  history.push('/');
};

export const fetchPlayers = () => async dispatch =>{
  const response = await db.get('/players');
  dispatch({type: FETCH_PLAYERS, payload: response.data});
}

export const fetchPlayer = (id) => async dispatch =>{
  const response = await db.get(`/players/${id}`);

  dispatch({type: FETCH_PLAYER, payload: response.data});
}

export const editPlayer = (id,formValues) => async dispatch =>{
  const response = await db.patch(`/players/${id}`,formValues);

  dispatch({type: EDIT_PLAYER, payload: response.data});
  history.push('/');
}

export const deletePlayer = (id) => async dispatch =>{
  await db.delete(`/players/${id}`);
  dispatch({type: DELETE_PLAYER, payload: id});
}

//---------TEAMS---------//
export const createTeam = formValues => async dispatch =>{
  const response = await db.post('/teams', {
    ...formValues,
    players:[],
    defenders:0, midfielders:0, forwards:0});

  dispatch({type:CREATE_TEAM, payload: response.data});
  history.push('/');
};

export const fetchTeams = () => async dispatch => {
  const response = await db.get('/teams');
  dispatch({ type: FETCH_TEAMS, payload: response.data });
}

export const fetchTeam = (id) => async dispatch =>{
  const response = await db.get(`/teams/${id}`);

  dispatch({type: FETCH_TEAM, payload: response.data});
}

export const editTeam = (id,formValues) => async dispatch =>{
  const response = await db.patch(`/teams/${id}`,formValues);

  dispatch({type: EDIT_TEAM, payload: response.data});
}

export const deleteTeam = (id) => async dispatch =>{
  await db.delete(`/teams/${id}`);
  dispatch({type: DELETE_TEAM, payload: id});
}

//-------Move players-------//
 export const movePlayerToTeam = (id,player) => async dispatch =>{
  const response = await db.post(`/teams/${id}/players`,player);
  dispatch({type: MOVE_PLAYER_TO_TEAM, payload:response.data});
}

export const movePlayerFromTeam = (id,playerId) => async dispatch =>{
  await db.delete(`/teams/${id}/players/${playerId}`);
  dispatch({type: MOVE_PLAYER_FROM_TEAM, payload: playerId});
}