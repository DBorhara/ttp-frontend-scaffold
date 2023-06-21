import React from 'react';
import './styles/AllPlayersView.css';

const AllPlayersView = (props) => {
  console.log('APV props', props)
  return (
    <div className="all-players">
      {props.allPlayers.map((player) => (
        <div key={player.id}>
          <h1>{player.firstName}</h1>
        </div>
      ))}
    </div>
  );
};

export default AllPlayersView;
