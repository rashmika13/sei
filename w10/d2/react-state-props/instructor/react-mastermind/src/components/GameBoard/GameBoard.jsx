import React from 'react';
import GuessRow from '../GuessRow/GuessRow';

const GameBoard = ({guesses, colors}) => (
  <div>
    {
      guesses.map(
        (guess, index) => <GuessRow  key={index} guess={guess} colors={colors} rowIndex={index}  currentGuess={index === guesses.length - 1} />
      )
    }
  </div>
);

export default GameBoard;
