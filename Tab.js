import React, { Component } from 'react';
import {
  StyleSheet,Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'
import Home from './src/views/Home'
import Mine from './src/views/Mine'
import Focus from './src/views/Focus'
import Apps from './src/views/Apps'

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
  return px *  deviceW / basePx
}


export default class Tab extends Component {
  state= {
    selectedTab: 'home'
  };

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="home" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() =><Icon name="home" size={px2dp(22)} color="#3496f0"/>}
          badgeText="1"
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home/>
        </TabNavigator.Item>
       
        <TabNavigator.Item
          selected={this.state.selectedTab === 'focus'}
          title="关注"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="heart-o" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="heart-o" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'focus'})}>
          <Focus/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'apps'}
          title="应用"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="wifi" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="wifi" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'apps'})}>
          <Apps/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'mine'}
          title="我的"
          selectedTitleStyle={{color: "#3496f0"}}
          renderIcon={() => <Icon name="user" size={px2dp(22)} color="#666"/>}
          renderSelectedIcon={() => <Icon name="user" size={px2dp(22)} color="#3496f0"/>}
          onPress={() => this.setState({selectedTab: 'mine'})}>
          <Mine/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 5,
  },
  img:{
    width:15,
    height:15
  },

});