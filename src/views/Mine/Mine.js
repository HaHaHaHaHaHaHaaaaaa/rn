import React, { Component } from 'react';
import {  Text, View, Image, StyleSheet, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Details from './Details'

export default class Mine extends Component {
    state = {
        clicked: 'false',
    }
  
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.ct}>
                <FlatList style={{ marginBottom: 15 }} data={[{ name: '呼和浩特电厂', subname: '王柏林' }]} renderItem={({ item }) =>
                    <TouchableOpacity onPress={navigate('Details')}>
                        <View style={styles.hdrow}>
                            <Image source={require('../../images/person.jpg')} style={{ width: 55, height: 55, borderRadius: 27.5 }} />
                            <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8 }}>
                                <Text style={{ fontSize: 14 }}>{item.subname}</Text>
                                <Text style={{ fontSize: 12 }}>{item.name}</Text>
                            </View>
                            <Icon name="angle-right" style={styles.arrow} size={15} color="#666" />
                        </View>
                    </TouchableOpacity>
                }
                />
                <FlatList
                    data={[{ key: '电厂信息', icon: 'gitlab', color: '#B331F1' }, { key: '我厂煤种', icon: 'area-chart', color: '#4290F4' }, { key: '应用分享', icon: 'share', color: '#34DE82' }, { key: '设置', icon: 'cog', color: '#F22F12' }]}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => { {/* this.setState({ clicked: 'true' }); */ } ToastAndroid.show('点击发生了', 1000) }}>
                            <View style={styles.row}><Icon name={item.icon} style={styles.icon} size={15} color={item.color} /><Text>{item.key}{/* {this.state.clicked} */}</Text><Icon name="angle-right" style={styles.arrow} size={15} color="#666" /></View></TouchableOpacity>
                    }
                />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    ct: {
        backgroundColor: '#efefef'
    },
    row: {
        height: 50,
        lineHeight: 50,
        paddingLeft: 10,
        fontSize: 14,
        backgroundColor: '#ffffff',
        margin: 5,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    hdrow: {
        height: 100,
        lineHeight: 100,
        paddingLeft: 10,
        fontSize: 14,
        backgroundColor: '#ffffff',
        margin: 5,
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginLeft: 5,
        marginRight: 5
    },
    arrow: {
        position: 'absolute',
        right: 5,
    },
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
});