import { AppRegistry } from 'react-native';
import RootTabs from './RootTabs'
/* import WView from './src/views/components/WView' */
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/views/redux/store/ConfigureStore';
const store = configureStore();
export default class Root extends Component {
    render() {
      return (
        <Provider store={store}>
          <RootTabs />
        </Provider>
      );
    }
  }
AppRegistry.registerComponent('rn', () => Root);
