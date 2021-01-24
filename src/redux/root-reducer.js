import { combineReducers } from 'redux';

// Reducers
import playerReducer from './player/player.reducer';

const rootReducer = combineReducers({
  players: playerReducer,
});

export default rootReducer;
