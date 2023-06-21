// Import the action type constants
import PlayerActionTypes from "./player.types";

// Define the initial state for the reducer
// In this case, the initial state has an empty array `allPlayers`
const INITIAL_STATE = {
  allPlayers: [],
};

// Define the reducer function
// A reducer is a pure function that describes how the state should change in response to an action
// It takes the current state and an action as arguments, and returns the new state
const playerReducer = (state = INITIAL_STATE, action) => {
  // Log the action to the console
  console.log("PL", action);

  // Switch statement to handle different action types
  switch (action.type) {
    // Case for when the action type is `FETCH_ALL_PLAYERS`
    // Action created from fetchAllPlayersThunk
    /*{type:PlayerActionTypes.FETCH_ALL_PLAYERS, payload:response.data} */
    case PlayerActionTypes.FETCH_ALL_PLAYERS:
      // If the action type is `FETCH_ALL_PLAYERS`, return a new state
      // where `allPlayers` is replaced with the payload from the action
      // The spread operator (...) is used to create a new object with the same properties as the old state
      return { ...state, allPlayers: action.payload };

    // Default case for when none of the cases match the action type
    // In the default case, return the state as is
    default:
      return state;
  }
};

// Export the reducer as the default export
export default playerReducer;
