import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';
import './GuessPegs.css';

const GuessPegs = ({ currentGuess, colors, code }) => (
  <div className="GuessPegs">
    <GuessPeg currentGuess={currentGuess} color={colors[code[0]]} />
    <GuessPeg currentGuess={currentGuess} color={colors[code[1]]} />
    <GuessPeg currentGuess={currentGuess} color={colors[code[2]]} />
    <GuessPeg currentGuess={currentGuess} color={colors[code[3]]} />
  </div>
);

export default GuessPegs;
