import React, { Component } from 'react';
import { Text, View, StyleSheet, WebView } from 'react-native'


export default class Home extends Component {
    static navigationOptions = {
        title: '首页',
    };
    render() {
        return (
            <View style={styles.container}>
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