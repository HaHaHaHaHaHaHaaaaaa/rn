import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native'
export default class Focus extends Component {
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
        return (
            <View style={styles.container}>
                {/* <Text style={styles.welcome}>
                    Focus
                </Text> */}
                <FlatList data={[{ key: 'item1', title: '内容' }, { key: 'item2', title: '内容' }, { key: 'item3', title: '内容' }]}
                    renderItem={
                        ({ item, index }) =>
                            <View style={{ borderBottomWidth: 1, borderBottomColor: '#efefef' }}>
                                <Text style={styles.welcome}>
                                    Focus {item.key} {item.title}
                                </Text>
                            </View>
                    }
                    onRefresh={() => {
                        this.setState((pre) => {
                            return { refreshing: !pre.refreshing }
                        })

                        setTimeout(() => {
                            this.setState((pre) => {
                                return { refreshing: !pre.refreshing }
                            })
                        }, 3000)
                    }}
                    refreshing={this.state.refreshing}
                >

                </FlatList>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});