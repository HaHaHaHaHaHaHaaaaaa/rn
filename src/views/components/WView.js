import React, { Component } from 'react';
import { View, StyleSheet, WebView, ToastAndroid } from 'react-native'

export default class WView extends Component {
    static navigationOptions =({navigation})=>({
        title:navigation.state.params.title,
        headerStyle: { backgroundColor: '#007AFF',},
        headerTitleStyle: { alignSelf: 'center',fontSize:14 },
        headerTintColor:'#ffffff',
        gesturesEnabled: true,
        headerRight: (
            <View style={{height: 44,width: 55,justifyContent: 'center',paddingRight:15} }/>
        ),
    })
    render() {
          {/* onLoad={()=>ToastAndroid.show('success',1000)} */}
        const des_url=this.props.des_url||this.props.navigation.state.params.des_url
        return (
            <View style={styles.container}>
                <WebView
                    source={{ uri: des_url }}//新版本中的写法
                    startInLoadingState={true}
                    domStorageEnabled={true}//开启dom存
                    javaScriptEnabled={true}//开启js
                    scalesPageToFit ={false}
                    style={styles.webview_style}
                    renderError ={()=>alert('webview load failed')}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview_style: {
        backgroundColor: '#FFFFFF'
    }
})
