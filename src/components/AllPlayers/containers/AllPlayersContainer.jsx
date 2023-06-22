// Import necessary libraries and components
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import the Redux action (a thunk in this case) used to fetch all players
import { fetchAllPlayersThunk } from "../../../redux/player/player.actions";

// Import the presentational component that will receive the props and render the UI
import { AllPlayersView } from "../views";

// Define a container component (also called "smart" component) which will handle the logic and provide data and behavior to its child component
const AllPlayersContainer = () => {
  // State
  const allPlayers = useSelector((state) => state.players.allPlayers);

  const dispatch = useDispatch();

  const fetchAllPlayers = () => {
    return dispatch(fetchAllPlayersThunk());
  };

  useEffect(() => {
    fetchAllPlayers();
  }, []);

  // Render the AllPlayersView component, passing the allPlayers prop to it
  // This prop is received from the Redux store via mapStateToProps
  return <AllPlayersView allPlayers={allPlayers} />;
};

export default AllPlayersContainer;
