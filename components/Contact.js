import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Picker } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import HeaderComponent from './HeaderComponent';

export class Contact extends Component {

    state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
    render() {
        return (
            <>
            <HeaderComponent name="Contact Us" rootProps={this.props} />
                <ScrollView>
                <View style={styles.container4} >

                <Text style={styles.eventName}>Contact Details.</Text>
                <Text></Text>
                <Text style={styles.course}>Sell It India Pvt. Ltd. 
                Building No. 12,
               
                Faridabad - 121001,
               
                Haryana, India</Text>
                   </View>
                    <View>
                    <Text style={styles.enquiry}>Submit Enquiry</Text>
                    </View>
                    <View style={styles.container}>
                        {/* <Text style={styles.loginText}>Register</Text> */}

                        <View style={styles.container3} >

                        <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} style={styles.pick}>
                        {/* <Picker.Item label = "Type your Enquiry" value = "Type your Enquiry" /> */}
               <Picker.Item label = "Business Enquiry" value = "Business Enquiry" />
               <Picker.Item label = "General Enquiry" value = "General Enquiry" />
               <Picker.Item label = "Order Enquiry" value = "Order Enquiry" />
            </Picker>

            </View>
                        <TextInput placeholder="Your name" onChangeText={(username)=>{this.setState({username})}} style={styles.inputbutton}></TextInput>
                        <TextInput placeholder="Email" style={styles.inputbutton} onChangeText={(email)=>{this.setState({email})}}></TextInput>
                        <TextInput placeholder="Phone Number" onChangeText={(phone)=>{this.setState({phone})}} style={styles.inputbutton}></TextInput>

                       


                        {/* <TextInput placeholder="Write Message here" onChangeText={(message)=>{this.setState({phone})}} style={styles.inputbutton}></TextInput> */}
                       </View>
                        <View style={styles.container1} >
                        <TextInput placeholder="Write Message here" onChangeText={(username)=>{this.setState({username})}} style={styles.inputbutton1}></TextInput>
                        </View>

                        {/* </View> */}
     
                        <View style={styles.container2} >
                        <TouchableOpacity style={styles.LoginStyles} onPress={() => this.login()}>
            <Text style={styles.loginButtontext}>Send Message</Text></TouchableOpacity>
            </View>
        
                    
                </ScrollView>
            </>
        );
                        }
                    }
                    const styles = StyleSheet.create({
                        activeCheckbox: {
                            color: "#1bb1dc",
                            padding: 8,
                            borderRadius: 20,
                            fontFamily: 'Montserrat-Bold',
                            // backgroundColor: "#273c75"
                          },
                          inactiveCheckbox: {
                            color: "black",
                            padding: 8,
                            borderRadius: 20,
                            fontFamily: 'Montserrat-Bold',
                            // backgroundColor: "#130f40"
                          },

                        
                          container1: {
                            height: 200,
                            // marginLeft:40,
                            alignSelf: 'center',
                            marginTop: 20,
                            width: 320,
                            // borderRadius: 20,
                            backgroundColor: "white",
                            padding: 10,
                            
                            // justifyContent: 'space-between',
                        },
                        container4: {
                            height: 150,
                            // marginLeft:40,
                            alignSelf: 'center',
                            marginTop: 20,
                            width: 320,
                            // borderRadius: 20,
                            backgroundColor: "white",
                            padding: 10,
                            
                            // justifyContent: 'space-between',
                        },
                        // container6: {
                        //     height: 20,
                        //     // marginLeft:40,
                        //     alignSelf: 'center',
                        //     marginTop: 20,
                        //     width: 320,
                        //     // borderRadius: 20,
                        //     backgroundColor: "white",
                        //     // padding: 10,
                        // },
                        eventName:{
                            fontSize:20,
                            textAlign:'center',
                            paddingBottom:1,
                            color:'#1e699d',
                        },

                        enquiry:{
                            marginTop: 20,
                            fontSize:20,
                            textAlign:'center',
                            paddingBottom:1,
                            color:'#1e699d',
                        },
                        pick: {
                            marginTop: 17,
                             marginLeft: 15,
                             marginRight: 15,
                             color:"black",
                            //  backgroundColor:"white",
                             
                        },
                        container2:{

                            marginBottom: 20,
                        },
                        
                        inputbutton: {
                            // marginTop:250,
                            borderRadius: 2,
                            marginTop: 20,
                            borderBottomWidth: 1,
                            backgroundColor: "#f8f9fa",
                            borderBottomColor: "black",
                            width: "90%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            
                        },
                        course: {
                        marginLeft: 47,

                        },
                        // container3:{
                        //     backgroundColor: "white",
                        //     marginLeft: 20,
                        //     marginRight: 20,
                        // },

                        text: {
                            fontSize: 30,
                            alignSelf: 'center',
                            color: 'red'
                        },
                        passwordbutton: {
                            marginTop: 20,
                            borderRadius: 2,
                            borderBottomWidth: 1,
                            borderBottomColor: "black",
                            backgroundColor: "#f8f9fa",
                            width: "90%",
                            marginLeft: "auto",
                            marginRight: "auto"
                        },
                        loginButtontext: {
                            textAlign: "center",
                            color: "white"
                        },
                        // LoginStyles: {
                        //     backgroundColor: "#1bb1dc",
                        //     padding: 10,
                        //     marginTop: 40,
                        //     width: "90%",
                        //     marginLeft: "auto",
                        //     marginRight: "auto",
                        //     borderRadius: 3,
                        // },
                        loginText: {
                            fontSize: 20,
                            marginTop: 80,
                            // marginBottom:-190,
                            textAlign: "center",
                            color: "black",
                        },
                        // loginButtontext: {
                        //     textAlign: "center",
                        //     color: "white"
                        //   },
                          LoginStyles: {
                            backgroundColor: "#1e699d",
                            padding: 10,
                            marginTop: 30,
                            width: "90%",
                            marginLeft: "auto",
                            marginRight: "auto",
                            borderRadius: 8,

                        }
                    });
                    
export default Contact
