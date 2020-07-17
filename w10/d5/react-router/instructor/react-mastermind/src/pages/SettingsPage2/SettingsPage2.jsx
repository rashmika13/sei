import React from 'react';
import { Link } from 'react-router-dom';

const SettingsPage2 = (props) => {
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Settings Page num: {props.match.params.num}</h1>
    </>
  );
};

export default SettingsPage2;
