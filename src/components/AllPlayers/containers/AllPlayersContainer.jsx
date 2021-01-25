import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchAllPlayersThunk } from '../../../redux/player/player.actions';
import { AllPlayersView } from '../views';

// Smart container;
class AllPlayersContainer extends Component {
  componentDidMount() {
    this.props.fetchAllPlayers();
    console.log(this.props);
  }

  render() {
    return <AllPlayersView allPlayers={this.props.allPlayers} />;
  }
}

// Map state to props;
const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    allPlayers: state.players.allPlayers,
  };
};

// Map dispatch to props;
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPlayers: () => dispatch(fetchAllPlayersThunk()),
  };
};

// Type check props;
// AllPlayersContainer.propTypes = {
//   allPlayers: PropTypes.array.isRequired,
//   fetchAllPlayers: PropTypes.func.isRequired,
// };

// Export our store-connected container by default;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPlayersContainer);
