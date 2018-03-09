import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ToastAndroid, Image } from 'react-native';
import { connect } from 'react-redux';
import { doLogin } from '../redux/actions/Login'

class Details extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        const { navigate } = this.props.navigation;
        // 登录完成，且成功登录
        if (nextProps.status === 'done' && nextProps.isSuccess) {
            alert(nextProps.user.name)
            return false;
        }
        return true;
    }


    static navigationOptions = {
        title: '个人信息',
        headerRight: (
            <Button title="保存" color="#007AFF" onPress={()=>{ alert('保存成功')}}/>
        )
    }



    render() {
        return (
            /*  <View>
                 <Text>{this.props.navigation.state.params.title}详情页面</Text>
                 <Button title="login" onPress={this.handleLogin.bind(this)} />
             </View>
             <Button title="login" onPress={this.handleLogin.bind(this)} />
             */
            <View>
                <View style={styles.row}>
                    <Text style={{ alignSelf: 'flex-start', paddingLeft: 10 }}>头像</Text>
                    <Image source={require('../../images/person.jpg')} style={{ width: 55, height: 55, borderRadius: 27.5, position: 'absolute', right: 15 }} />
                </View>
                <View style={styles.row}>
                    <Text style={{ alignSelf: 'flex-start', paddingLeft: 10 }}>姓名</Text>
                    <Text style={{ position: 'absolute', right: 15 }}>王柏林</Text>
                </View>
                <View style={styles.row}>
                    <Text style={{ alignSelf: 'flex-start', paddingLeft: 10 }}>手机号</Text>
                    <Text style={{ position: 'absolute', right: 15 }}>18682382309</Text>
                </View>
            </View>
        )
    }

    handleLogin() {
        this.props.dispatch(doLogin());
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        height: 77,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 0,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 2
    }
});


function select(store) {
    return {
        status: store.loginIn.status,
        isSuccess: store.loginIn.isSuccess,
        user: store.loginIn.user
    }
}



export default connect(select)(Details);
