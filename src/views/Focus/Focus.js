import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import { connect } from 'react-redux';
import ScreenUtil from '../../utils/ScreenUtil'

import {isRefresh,doneRefresh} from '../redux/actions/Refresh'
import configureStore from '../redux/store/ConfigureStore'
const store=configureStore()

class Focus extends Component {
    constructor() {
        super();
        this.state = {
            refreshing: false
        }
    }
    static navigationOptions = {
        title: '关注',
    };

    render() {
        data = [{ key: 'item1', title: '内容' }, { key: 'item2', title: '内容' }, { key: 'item3', title: '内容' }]
        return (
            <View style={styles.container}>
                <FlatList  data={data}
                    renderItem={
                        ({ item, index }) =>
                            <View style={styles.wraper}>
                                <Image source={require('../../images/person.jpg')} style={styles.img} />
                                <View style={styles.textWraper}>
                                    <Text numberOfLines={1} style={styles.welcome}>军报评红黄蓝事件：“博眼球”，背后有多少别有用心？</Text>
                                    <Text numberOfLines={1} style={styles.welcomeBt}> 近日，北京市红黄蓝幼儿园发生的侵害儿童事件，引起社会各界高度关注,据警方情况通报，涉事人员已被依法刑事拘留，而编造“老虎团”人员集体猥亵幼儿虚假信息者也被依法行政拘留。</Text>
                                </View>
                            </View>
                    }
                    onRefresh={() => {
                       {/*  this.refresh(); */}
                        store.dispatch(isRefresh())
                        fetch('http://www.baidu.com').then(rs=>{
                            store.dispatch(doneRefresh())
                           {/*  this.refresh() */}
                        }).catch(err=>{

                        })
                        
                        
                    }}
                    refreshing={store.getState().doRefresh.status==='done'?false:true}
                >

                </FlatList>
            </View>
        )

        
    }
/*     refresh(){
        this.setState({refreshing:!this.state.refreshing})
    } */
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 14,margin:2,width:100+'%',
    },
    welcomeBt: {
        fontSize: 12,margin:2,width:100+'%',
    },
    img: {
        width: 50,
        height: 50
    },
    wraper: {
        borderBottomWidth: 1,
        borderBottomColor: '#efefef',
        flexDirection: 'row',
        height:60,
        alignItems: 'center',
        padding: 8
    },
    textWraper: {
        width:90+'%',
        flexDirection: 'column',
        marginLeft:6,
        marginRight:6
    }
});



function select(store) {
    return {
        status: store.doRefresh.status,
    }
}

export default connect(select)(Focus)