import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'
import Axios from 'axios'
const domain = "http://123.57.151.33:9999";
const Login_url = domain + "/Handler/UserControl.asmx/Login"
export default class Apps extends Component {
    static navigationOptions = {
        title: '应用',
        /* headerTitleStyle: { alignSelf: 'center',fontSize:14 },
        headerRight: (
            <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
        ), */
    };
    state = {
        token: ' ',
    }
    componentWillMount() {
        /*  Axios.post(Login_url, { 'username': 'admin', 'pwd': '8888', 'autoLogin': false }).then(rs => {
             let token = rs.data.d.items[0].token;
             this.setState(pre=>{
                 return {token:token}
             })
           }) */
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.items}>
                    <TouchableOpacity onPress={() =>
                        navigate('WebSite', { des_url: 'http://11111111111111111111111#/mine-general/%20' + this.state.token, title: '煤场概况' })
                    }>
                        <View style={styles.innerItems}><Text style={styles.wz}>煤场概况</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>
                        navigate('WebSite', { des_url: 'http://11111111111111111111111#/mixburning-general/%20' + this.state.token, title: '掺烧概况' })
                    }>
                        <View style={styles.innerItems}><Text style={styles.wz}>掺烧概况</Text></View>
                    </TouchableOpacity>
                </View>
                <View style={styles.items}>
                    <TouchableOpacity onPress={() =>
                        navigate('WebSite', { des_url: 'http://11111111111111111111111#/plantInfo/%20' + this.state.token, title: '电厂信息' })
                    }>
                        <View style={styles.innerItems}><Text style={styles.wz}>电厂信息</Text></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>
                        navigate('WebSite', { des_url: 'http://11111111111111111111111#/operation-figure/%20' + this.state.token, title: '运行指标' })
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
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent:'center',
        /* width:100+'%',
        height:100+'%', */
        margin:8
    },
    items: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        width:100+'%',
    },
    innerItems: {
        backgroundColor: '#1571FA',
        /* margin: 10, */
        borderRadius: 5,
        opacity:0.7
    },
    wz: {
        fontSize: 20,
        color:'#ffffff',
        margin: 20,
    }
});