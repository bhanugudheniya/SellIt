import React, { Component } from 'react'
import { Text, View,Image,StyleSheet } from 'react-native'
import HeaderComponent from "./HeaderComponent";
import { ScrollView } from 'react-native-gesture-handler';
export class About extends Component {
    render() {
        return (
            <>
            <ScrollView>
            <HeaderComponent name="About Us" rootProps={this.props}/>
            <View>
            <Image source ={require('../assets/image/network.png')} style={styles.image}></Image>
            </View>


            <View style={styles.container}>
                <Text style={styles.inside1}>THE IDEA ORIGINATED IN 2015</Text>
                <Text style={styles.inside}> When one of 2 friends wanted to buy a new phone, he tried to sell off his phone for funding but found it difficult to do so.</Text>
                        </View>

                        <View style={styles.container}>
                <Text style={styles.inside1}>WE JUST MADE SELLING YOUR USED PHONE EASY</Text>
                <Text style={styles.inside}>That’s when the concept of Sellit was formed. To create a platform that would let you sell your phone in a simple manner for the best price.</Text>
                        </View>

            </ScrollView>

            </>
        )
    }
}
const styles = StyleSheet.create({
image:{
    width:'100%',
    resizeMode: 'stretch',
    height:350,
    marginBottom:30,
},
inside:{
    textAlign:"center",
    color:"black",
    justifyContent:"space-around",

},
inside1:{
    textAlign:"center",
    color:"#1e699d",
    justifyContent:"space-around",

},
container:{
    marginBottom:30,
    height:100,
    width: 300,
    alignSelf:"center",
    borderRadius:10,
    backgroundColor: "white",
    justifyContent:"space-around",

},

})

export default About
