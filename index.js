/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ContextState from './src/Store/context';

import React from 'react';

const AppWrapper = () => {
  return (
    <ContextState>
      <App />
    </ContextState>
  );
};

AppRegistry.registerComponent(appName, () => AppWrapper);
