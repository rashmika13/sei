import React from 'react';
import './GuessScore.css';

const GuessScore = ({ score }) => {
  let scores = (
    'P'.repeat(score.perfect) +
    'A'.repeat(score.almost) +
    'I'.repeat(4 - score.perfect - score.almost)
  ).split('');

  const baseStyles = {
    width: 10,
    height: 10,
    margin: 1,
    border: '2px solid',
    borderStyle: 'solid',
    borderRadius: '50%',
  };

  const pegStyles = {
    P: {
      borderColor: 'black',
      backgroundColor: 'black',
    },
    A: {
      borderColor: 'black',
      backgroundColor: 'white',
    },
    I: {
      borderColor: 'white',
      backgroundColor: 'lightgrey',
    },
  };

  return (
    <div className="GuessScore">
      {scores.map((score, idx) => {
        const className =
          score === 'P'
            ? 'GuessScore-peg-perfect'
            : score === 'A'
            ? 'GuessScore-peg-almost'
            : 'GuessScore-peg-incorrect';
        return <div key={idx} className={`GuessScore-peg ${className}`} />;
      })}
    </div>
  );
};

export default GuessScore;
