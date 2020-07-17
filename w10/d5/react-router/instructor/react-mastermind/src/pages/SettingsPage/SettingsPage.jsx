import React from 'react';
import { Link } from 'react-router-dom';

const SettingsPage = (props) => {
  const handleClick = () => {
    props.history.push('/settings/2');
  };

  const handleClick2 = () => {
    props.history.replace('/settings/2');
  };

  return (
    <>
      <Link to="/">Home</Link>
      <button onClick={handleClick} className="btn btn-default">
        Got to Settings 2
      </button>
      <button onClick={handleClick2} className="btn btn-default">
        Replace with Settings 2
      </button>
      <h1>Settings Page</h1>
    </>
  );
};

export default SettingsPage;
