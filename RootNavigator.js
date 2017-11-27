import React from 'react';
import { StackNavigator } from 'react-navigation';
import RootTabs from './RootTabs'
import Details from './src/views/Mine/Details'

const RootNavigator = StackNavigator({
  Mine: {
    screen: RootTabs
  },
  Details: {
    screen: Details
  }
});

export default RootNavigator;