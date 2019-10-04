import React from "react";

const Display = props => {
  return (
    <div className="player-container">
      <h2 data-testid="players-header">Player: {props.data.name}</h2>
      <p>Country: {props.data.country}</p>
      <p>Searches: {props.data.searches}</p>
    </div>
  );
};

export default Display;
