import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Button } from 'react-native'

import HeaderComponent from './HeaderComponent';


export class Device extends Component {
    render() {
        return (
            <>
            <HeaderComponent name="Your Device" rootProps={this.props} />
            <ScrollView style={{ display: 'flex', flexDirection: 'column' }}>
                <View style={styles.MainBoard}>
                    
                        <View style={{ flexDirection: 'row' }}>

                                <View style={styles.iconTextAlign}>
                                    <View>
                                        <Text style={{fontSize:17,padding:9,fontWeight: "bold"}}>Apple iPhone 11 Pro Max</Text>
                                        <Image source={require('../assets/image/apple7.png')} style={styles.CardImage}/>
                                    </View>

                                    <View>
                                        <Text style={{color: "#7DCEA0", padding:10,}}>Choose a Varient</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity style={styles.button1}>
                                    <View style={styles.iconTextAlign} >
                                        <Text style={styles.button}>65 GB</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.button1}>
                                    <View style={styles.iconTextAlign}>
                                        <Text style={styles.button}>256 GB</Text>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.button1}>
                                    <View style={styles.iconTextAlign}>
                                        <Text style={styles.button}>512 GB</Text>
                                        </View>
                                    </TouchableOpacity>
                                    </View>
                                        
                                 </View>
                        </View>
                    
                </View>
                
                {/*  */}
                <View>
                <TouchableOpacity style={styles.verify}>
                                    <View style={styles.next}>
                                        <Text style={styles.button2}>Get Exact Value -></Text>
                                        </View>
                                    </TouchableOpacity>
                </View>
                </ScrollView>
                    
            </>
        )
    }
}

// Stylesheet
const styles = StyleSheet.create({
    MainBoard:{
      marginTop:20,
      marginLeft:10,
      marginRight:10,
      // borderColor:'grey',
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      // borderWidth: 1,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
    },
  
    Card: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    //   justifyContent: 'center',
    //   alignItems: 'center',
      marginTop: 10,
      shadowColor: "red",
  
      // shadowRadius:5,
      // elevation:0.5,
      // shadowOffset:{ width: 10,
      // height: 10},
      // shadowRadius:18,
      // shadowOpacity:0.7
    },
    icons: {
      height: 50,
      width: 50,
      alignSelf: "center"
    },
    textStyles: {
      textAlign: "center",
      paddingTop: 10
    },
    ficon: {
      color: "#554276",
  
    },
    iconTextAlign:{
      display:'flex',flexDirection:'column'
    },
  
    CardImage:{
      width:200,
      height:250,
      alignSelf:'center',
      justifyContent:'center',
      marginTop:20,
      marginBottom:20
    },

    button:{
        marginTop:10,
        width:100,
        color:'#1e699d',
        flex: 1,
    flexDirection: "row",
    borderColor:'#1e699d',
    borderRadius: 10,
    borderWidth:1,
    padding:10,
    textAlign:'center',
    alignSelf:'center',
    //resizeMode: 'cover'
    },

    button1: {
        display: 'flex',
        flexDirection: 'row',
        width: '33.33%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom:10,
        shadowColor: "red",
      },

      iconTextAlign:{
        display:'flex',flexDirection:'column',
      },

      verify:{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            marginBottom:10,
            shadowColor: "red",
          },

          next:{
            display:'flex',flexDirection:'column'
          },
          
          button2:{
            width:320,
            height:50,
            fontSize:18,
            color:'#FFFFFF',
            flex: 1,
            backgroundColor:'grey',
        flexDirection: "row",
        borderColor:'grey',
        borderRadius: 10,
        borderWidth:1,
        padding:10,
        textAlign:'center',
        alignSelf:'center',
        //resizeMode: 'cover'
        },
  
  });
  

export default Device
