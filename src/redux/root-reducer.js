// Import the combineReducers utility function from redux
// This function is used to combine multiple reducers into a single reducer function
import { combineReducers } from "redux";

// Import the playerReducer, which describes how the state updates when player-related actions are dispatched
import playerReducer from "./player/player.reducer";

// Use combineReducers to combine the different reducers
// In this case, we only have one reducer: playerReducer
// The key 'players' will be used to access the part of the state described by playerReducer
const rootReducer = combineReducers({
  players: playerReducer,
});

// Export the combined reducer as the default export
// This rootReducer will be used to create the redux store
export default rootReducer;
