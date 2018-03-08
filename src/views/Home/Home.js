import React, { Component } from 'react';
import { Text, View, StyleSheet, WebView} from 'react-native'
import WView from '../components/WView'

export default class Home extends Component {
    static navigationOptions = {
        title: '首页',
        /* headerTitleStyle: { alignSelf: 'center',fontSize:14 },
        headerRight: (
            <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
        ), */
    };
    state={
        def_url:"http://www.baidu.com"
    }
    
    render() {
        return (
            <View style={styles.container}>
                <WView des_url={this.state.def_url}/>
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