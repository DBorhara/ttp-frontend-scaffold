// Import necessary libraries and components
import React, { Component } from "react";
import { connect } from "react-redux"; // The connect function is used to connect this React component to the Redux store

// Import the Redux action (a thunk in this case) used to fetch all players
import { fetchAllPlayersThunk } from "../../../redux/player/player.actions";

// Import the presentational component that will receive the props and render the UI
import { AllPlayersView } from "../views";

// Define a container component (also called "smart" component) which will handle the logic and provide data and behavior to its child component
class AllPlayersContainer extends Component {
  componentDidMount() {
    // When the component mounts, dispatch the fetchAllPlayersThunk action
    // This action fetches all players and updates the Redux store
    this.props.fetchAllPlayers();

    // Log the props to the console
    console.log("props object", this.props);
  }

  render() {
    // Render the AllPlayersView component, passing the allPlayers prop to it
    // This prop is received from the Redux store via mapStateToProps
    return <AllPlayersView allPlayers={this.props.allPlayers} />;
  }
}

// Define a function to map the Redux state to the component's props
const mapStateToProps = (state) => {
  // Log the state to the console
  console.log("mapStateToProps state", state);

  return {
    // The allPlayers prop will have a value equal to the allPlayers property of the state in the Redux store
    allPlayers: state.players.allPlayers,
  };
};

// Define a function to map the dispatch of actions to the component's props
const mapDispatchToProps = (dispatch) => {
  return {
    // The fetchAllPlayers prop will be a function that dispatches the fetchAllPlayersThunk action
    fetchAllPlayers: () => dispatch(fetchAllPlayersThunk()),
  };
};

// Connect the component to the Redux store, and export the connected component
export default connect(
  mapStateToProps, // The function to map the state to the component's props
  mapDispatchToProps // The function to map dispatch to the component's props
)(AllPlayersContainer);
