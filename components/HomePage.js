import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'

export class HomePage extends Component {
    render() {
        return (
            <View style={styles.MainDiv}>  
            <View style={styles.CardImage}>
            <Image source={require('../assets/image/phone.png')} style={styles.Image}/>
            </View>
             
            <View style={styles.MainText}>
                <Text style={styles.Text}>have an old or cracked phone??</Text>
            </View>         

            <TouchableOpacity style={styles.Main} onPress={()=>this.props.navigation.navigate('Dashboard')}>
                <View>
                    <Text style={styles.Click}> SELL IT NOW </Text>
                </View>
            </TouchableOpacity>    

            </View>
        )   
    }
}

const styles = StyleSheet.create({
    MainDiv:{
        backgroundColor:'#e6f3ff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    Main:{
        alignSelf:'center',
        marginTop:'18%',
    },

    Click:{
        width:150,
        height:50,
        color:'#FFFFFF',
    borderColor:'#103956',
    borderRadius: 10,
    borderWidth:5,
    textAlign:'center',
    padding:12,
    backgroundColor:'#1c6497',
    fontSize:18,
    },

    MainText:{
        alignSelf:'center',
        marginTop:'3%',
        paddingLeft:10,
        paddingRight:5,
    },

    Text:{
        fontSize:40,
        color:'#103956',
    },
    
    Image:{
        width:250,
        height:260,
        alignSelf:'center',
        justifyContent:'center',
        // marginTop:20,
        // marginBottom:20
        backgroundColor:'transparent',
    },
    CardImage:{
        backgroundColor:'#e6f3ff',
        paddingBottom:2,
    }
})

export default HomePage
