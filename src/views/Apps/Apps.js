import React, { Component } from 'react';
import { Text, View,StyleSheet } from 'react-native'
export default class Apps extends Component {
    static navigationOptions = {
        title: '应用',
      };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Apps
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