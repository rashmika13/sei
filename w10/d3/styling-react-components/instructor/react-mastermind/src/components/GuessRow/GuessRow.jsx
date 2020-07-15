import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';

const GuessRow = ({ colors, currentGuess, guess, rowIdx }) => (
  <div className="flex-h">
    <div style={{ color: currentGuess ? 'black' : 'lightgrey' }}>{rowIdx + 1}</div>
    <GuessPegs colors={colors} code={guess.code} />
    {currentGuess ? <ScoreButton /> : <GuessScore score={guess.score} />}
  </div>
);

export default GuessRow;
