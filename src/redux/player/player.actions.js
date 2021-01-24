import axios from 'axios';
import PlayerActionTypes from './player.types';

//ACTION CREATORS
export const fetchAllPlayers = (payload) => ({
  type: PlayerActionTypes.FETCH_ALL_PLAYERS,
  payload,
});

//THUNKS

export const fetchAllPlayersThunk = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/players');
      console.log('data', data);
      dispatch(fetchAllPlayers(data));
    } catch (error) {
      console.error(error);
    }
  };
};
