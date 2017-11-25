/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
      {/*   <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text> */}
        
          <Text style={{ flex: 1, backgroundColor: 'powderblue',color:'white' }} >11111</Text> 
          <Text style={{ flex: 2,backgroundColor: 'skyblue',color:'white' }} >333</Text> 
          <Text style={{ flex: 3, backgroundColor: 'steelblue',color:'white' }} >2222</Text> 
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 36,
    marginBottom: 5,
  },
});
