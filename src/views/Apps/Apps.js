import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
export default class Apps extends Component {
    static navigationOptions = {
        title: '应用',
    };
    state={
        def_url:'http://www.baidu.com'
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.items}>
                    <TouchableOpacity onPress={()=>
                        navigate('WebSite',{des_url:this.state.def_url,title:'煤场概况'})
                    }>
                        <View ><Text style={styles.wz}>煤场概况</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View ><Text style={styles.wz}>煤场概况</Text></View>
                    </TouchableOpacity>
                </View>
                <View style={styles.items}>
                    <TouchableOpacity>
                        <View ><Text style={styles.wz}>煤场概况</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View><Text style={styles.wz}>煤场概况</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    items: {
        padding: 10,
        flex: 1, flexDirection: 'row', alignItems: 'center',
    },
    wz: {
        fontSize: 20,
        margin:20,
    }
});