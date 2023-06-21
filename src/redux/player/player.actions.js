// Import axios library for making API requests
import axios from "axios";

// Import the action type constants
import PlayerActionTypes from "./player.types";

// ACTION CREATORS

// This is an action creator. It returns a Redux action with a type and payload.
export const fetchAllPlayers = (payload) => ({
  type: PlayerActionTypes.FETCH_ALL_PLAYERS, // Action type
  payload: payload, // Data to be sent with the action
});

// THUNKS

// A Redux thunk for fetching all players
// Thunks are used for async actions and return a function that receives `dispatch` as an argument
export const fetchAllPlayersThunk = () => {
  
  // The thunk returns a function
  return async (dispatch) => {
    
    try {
      // Make an API request to get all players
      const response = await axios.get("http://localhost:8080/api/players");
      
      // Log the response data to the console
      console.log("data", response.data);
      
      // Dispatch an action with the received data as payload
      // This will trigger the Redux reducer(s) associated with the action type
      dispatch(fetchAllPlayers(response.data));
      
      // The dispatched action will be like this:
      /*{type:PlayerActionTypes.FETCH_ALL_PLAYERS, payload:response.data} */
    } catch (error) {
      // If there's an error in the try block (like a failed API request), it will be caught here and logged to the console
      console.error(error);
    }
  };
};