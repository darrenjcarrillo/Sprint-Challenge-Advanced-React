import React from "react";
import styled from "styled-components";

const Display = props => {
  console.log(`this is props in Display.js`, props);
  return (
    <div className="player-container">
      <h2 data-testid="players-header">Player: {props.data.name}</h2>
      <p>Country: {props.data.country}</p>
      <p>Searches: {props.data.searches}</p>
    </div>
  );
};

export default Display;
