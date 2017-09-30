import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import NomalView from './src/containers/NomalView';
import SpecialView from './src/containers/SpecialView';

class IosKeyboard extends Component {
  render() {
    // return <NomalView />;
    return <SpecialView />;
  }
}

AppRegistry.registerComponent('IosKeyboard', () => IosKeyboard);
