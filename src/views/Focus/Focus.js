import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native'
export default class Focus extends Component {
    static navigationOptions = {
        title: '关注',
      };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Focus
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });