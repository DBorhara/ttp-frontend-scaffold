import PlayerActionTypes from './player.types';

const INITIAL_STATE = {
  allPlayers: [],
};

const playerReducer = (state = INITIAL_STATE, action) => {
  console.log('PL', action);
  switch (action.type) {
    case PlayerActionTypes.FETCH_ALL_PLAYERS:
      return { ...state, allPlayers: action.payload };
    default:
      return state;
  }
};

export default playerReducer;
