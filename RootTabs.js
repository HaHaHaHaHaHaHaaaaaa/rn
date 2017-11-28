import React, { Component } from 'react';
import { View } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from './src/views/Home/Home'
import Mine from './src/views/Mine/Mine'
import Details from './src/views/Mine/Details'
import Focus from './src/views/Focus/Focus'
import Apps from './src/views/Apps/Apps'

const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor, focused }) =>
                <View>
                    <Icon
                        name="home"
                        size={15}
                        color={focused ? "#007AFF" : "#666"}
                    />
                </View>
        },
    },
    Focus: {
        screen: Focus,
        navigationOptions: {
            tabBarLabel: '关注',
            tabBarIcon: ({ tintColor, focused }) =>
                <View>
                    <Icon
                        name="heart-o"
                        size={15}
                        color={focused ? "#007AFF" : "#666"}
                    />
                </View>
        },
    },
    Apps: {
        screen: Apps,
        navigationOptions: {
            tabBarLabel: '应用',
            tabBarIcon: ({ tintColor, focused }) =>
                <View>
                    <Icon
                        name="wifi"
                        size={15}
                        color={focused ? "#007AFF" : "#666"}
                    />
                </View>
        },
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) =>
                <View>
                    <Icon
                        name="user"
                        size={15}
                        color={focused ? "#007AFF" : "#666"}
                    />
                </View>
        },
    },
}, {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: '#007AFF',
            inactiveTintColor: '#999', // 文字和图片未选中颜色
            showIcon: true,
            pressColor: 'blue',
            indicatorStyle: { backgroundColor: '#efefef', elevation: 0 },
            style: {
                backgroundColor: '#efefef', // TabBar 背景色
            },
            labelStyle: {
                fontSize: 10,
                paddingTop: 0,
                marginTop: 0,
            },
            tabStyle: {
                /*  marginTop:10, */
                height: 49
            }
        },
        backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转 
        scrollEnabled: false,
        swipeEnabled: false,
    })

export default RootTabs = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            headerStyle: { backgroundColor: '#007AFF', },
            headerTitleStyle: { alignSelf: 'center', },
            headerTintColor:'#ffffff',
            gesturesEnabled: true,
            mode:'card'
        }
    },
    Details: {
        screen: Details
    }
})