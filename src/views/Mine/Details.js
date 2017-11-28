import React, { Component } from 'react';
import {View,Text} from 'react-native';

export default class Details extends Component {
    static navigationOptions = {
        title:'个人信息',
        headerStyle: { backgroundColor: '#007AFF', },
        headerTitleStyle: { alignSelf: 'center', },
        headerTintColor:'#ffffff',
        gesturesEnabled: true,
        headerRight: (
            <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
        ),
    }
           
    render() {
        
        return (
            <View>
                <Text>{this.props.navigation.state.params.title}详情页面</Text>
            </View>
        )
    }
}