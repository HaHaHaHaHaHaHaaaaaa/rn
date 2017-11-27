import NavigationBar from 'react-native-navbar';
import React, { Component } from 'react';
import { View } from 'react-native'


/* const leftButtonConfig = {
  title: 'Back',
  handler: () => alert('hello!'),
} */


export default class NavBar extends Component {
  render() {

    return (
      <NavigationBar style={{ backgroundColor: '#007AFF' }}
        title={{
          title: this.props.title,
          tintColor: '#ffffff'
        }}
      />
    );
  }

}


