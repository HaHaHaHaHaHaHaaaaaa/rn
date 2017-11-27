import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import NavBar from './components/NavBar'
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavBar title="首页"/>
                <Text style={styles.welcome}>
                    Home
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