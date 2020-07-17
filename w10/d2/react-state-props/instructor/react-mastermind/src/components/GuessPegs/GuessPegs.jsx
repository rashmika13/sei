import React from 'react';
import GuessPeg from '../GuessPeg/GuessPeg';

const GuessPegs = ({ code, colors }) => (
  <div className='flex-h'>
    <GuessPeg color={colors[code[0]]}/>
    <GuessPeg color={colors[code[1]]} />
    <GuessPeg color={colors[code[2]]} />
    <GuessPeg color={colors[code[3]]} />
  </div>
);

export default GuessPegs;
