import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,AsyncStorage } from 'react-native'
import Axios from 'axios'
const domain = "http://123.57.151.33:9999";
const Login_url = domain + "/Handler/UserControl.asmx/Login"
export default class Apps extends Component {
    static navigationOptions = {
        title: '应用',
    };
    state = {
        token:' ',
    }
    componentWillMount(){
        Axios.post(Login_url, { 'username': 'admin', 'pwd': '', 'autoLogin': false }).then(rs => {
            let token = rs.data.d.items[0].token;
            this.setState(pre=>{
                return {token:token}
            })
          })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.items}>
                    <TouchableOpacity onPress={() =>
                        navigate('WebSite', { des_url: 'http://123.57.151.33:9999/h5/#/mine-general/'+this.state.token, title: '煤场概况' })
                    }>
                        <View style={styles.innerItems}><Text style={styles.wz}>煤场概况</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>
                        navigate('WebSite', { des_url: 'http://123.57.151.33:9999/h5/#/mixburning-general/'+this.state.token, title: '掺烧概况' })
                    }>
                        <View style={styles.innerItems}><Text style={styles.wz}>掺烧概况</Text></View>
                    </TouchableOpacity>
                </View>
                <View style={styles.items}>
                    <TouchableOpacity onPress={() =>
                        navigate('WebSite', { des_url: 'http://123.57.151.33:9999/h5/#/plantInfo/'+this.state.token, title: '电厂信息' })
                    }>
                        <View style={styles.innerItems}><Text style={styles.wz}>电厂信息</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>
                        navigate('WebSite', { des_url: 'http://123.57.151.33:9999/h5/#/operation-figure/'+this.state.token, title: '运行指标' })
                    }>
                        <View style={styles.innerItems} ><Text style={styles.wz}>运行指标</Text></View>
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
    innerItems: {
        backgroundColor: '#31BFD0',
        margin: 10,
        borderRadius: 10
    },
    wz: {
        fontSize: 20,
        margin: 20,
    }
});