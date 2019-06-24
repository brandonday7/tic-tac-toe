import React from 'react';
import './App.css';
import { determineSnack } from "./utils/utils.js"

const Snack = ({ onClick, player }) => (
  <div onClick={onClick} className="square">
    {player ? <img src={determineSnack(player)} className="snack-image" alt="snack"/> : null}
  </div>
)

export default Snack;
