import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
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
    }



    render() {
        return (
            <View>
                <Text>{this.props.navigation.state.params.title}详情页面</Text>
                <Button title="login" onPress={this.handleLogin.bind(this)} />
            </View>
        )
    }

    handleLogin() {
        this.props.dispatch(doLogin());
    }
}

function select(store) {
    return {
        status: store.loginIn.status,
        isSuccess: store.loginIn.isSuccess,
        user: store.loginIn.user
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(select)(Details);
