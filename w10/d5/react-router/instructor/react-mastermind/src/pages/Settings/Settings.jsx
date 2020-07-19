import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SettingsPage from '../SettingsPage/SettingsPage';
import SettingsPage2 from '../SettingsPage2/SettingsPage2';

const Settings = (props) => {
  return (
    <>
      <h1>ALL THE SETTINGS</h1>
      <Switch>
        <Route exact path="/settings" component={SettingsPage} />
        <Route
          exact
          path="/settings/:num"
          render={({ match }) => <SettingsPage2 other="hello" match={match} />}
        />
      </Switch>
    </>
  );
};

export default Settings;
