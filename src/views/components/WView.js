import React, { Component } from 'react';
import { View, StyleSheet, WebView ,ToastAndroid} from 'react-native'
const DEFAULT_URL = "https://www.baidu.com"
export default class WView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    source={{ uri: DEFAULT_URL }}//新版本中的写法
                    startInLoadingState={true}
                    domStorageEnabled={true}//开启dom存
                    javaScriptEnabled={true}//开启js
                    scalesPageToFit ={false}
                    style={styles.webview_style}
                    onLoad={()=>ToastAndroid.show('success',1000)}
                    renderError ={()=>alert('err')}
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
        width: 100 + '%',
        height: 450,
        backgroundColor: 'red'
    }
})
