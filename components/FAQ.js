import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import HeaderComponent from "./HeaderComponent";
import { ScrollView } from 'react-native-gesture-handler';

export class FAQ extends Component {
    render() {
        return (
            <>
            <ScrollView>

            <HeaderComponent name="FAQ" rootProps={this.props}/>
            <View>
                <Text> textInComponent </Text>
            </View>
            </ScrollView>
            </>
        )
    }
}

export default FAQ
