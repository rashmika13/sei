import React from 'react';
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';
import ScoreButton from '../ScoreButton/ScoreButton';


// guess: { code }  totally equivalent to saying props.guess.code
const GuessRow = ({rowIndex, colors, guess: { code }, currentGuess}) => (
  <div className='flex-h'>
    <div>Guess Row # {rowIndex + 1}</div>
    <GuessPegs colors={colors} code={code}/>

    {/* JSX USES EXPRESSIONS FOR CONDITIONALS, hence we use a ternary */}
    {
      currentGuess ?
      <ScoreButton/>
      :
      <GuessScore/>
    }

  </div>
);

export default GuessRow;
