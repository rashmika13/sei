import React from 'react';
import styles from './GuessPeg.module.css';

const GuessPeg = ({ color, currentGuess }) => (
  <div
    className={styles.peg}
    style={{
      backgroundColor: color,
      border: color ? `1px solid ${color}` : '1px dashed grey',
      cursor: currentGuess && 'pointer',
    }}
  />
);

export default GuessPeg;
