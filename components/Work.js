import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'
import HeaderComponent from "./HeaderComponent";
import { ScrollView } from 'react-native-gesture-handler';

export class Work extends Component {
    render() {
        return (
            <>
            <ScrollView>
            <HeaderComponent name="How it Works" rootProps={this.props}/>
            <View>
            <Text style={styles.top}>Self,Rubbish,Recycle - One Platform</Text>
            </View>

            <View>
                <Image source ={require('../assets/image/works.png')} style={styles.image}></Image>
            </View>


            <View style={styles.container}>
                <Text style={styles.inside1}>Instant Quote for Your Device.</Text>
                <Text style={styles.inside}> Just answer few questions about your device condition to get the exact value for your device.</Text>
                        </View>

                        
            <View style={styles.container}>
                <Text style={styles.inside1}>Best Value for Your Old Devices.</Text>
                <Text style={styles.inside}>We offer the maximimum price compared to other websites.</Text>
                </View>

                <View style={styles.container}>
                <Text style={styles.inside1}>	Free Doorstep Pickup</Text>
                <Text style={styles.inside}>A pickup guy visits your mentioned address, checks your device thoroughly and collects it from you.</Text>
                </View>

                <View style={styles.container}>
                <Text style={styles.inside1}>Instant Cash for Your Old Devices</Text>
                <Text style={styles.inside}>Get the mentioned value for your device when you hand over the device to the pickup guy.</Text>
                </View>

                <View style={styles.container}>
                <Text style={styles.inside1}>Full Assurance</Text>
                <Text style={styles.inside}>We make sure that your device goes to safe hands so there is no risk of misuse.</Text>
                </View>
                {/* <View style={{ flexDirection: 'row' }}>
                <View style={styles.container1}>
                    <Text style={styles.inside1}>Stisfied customer</Text>
                    <Text style={styles.inside}>2500</Text>
                    </View>

                    <View style={styles.container1}>
                    <Text style={styles.inside1}>Devices Bought</Text>
                    <Text style={styles.inside}>2500</Text>
                    </View>
                </View> */}
            </ScrollView>
            </>
        )
    }
}

const styles = StyleSheet.create({
top:{
textAlign:"center",
marginTop:10,
fontSize: 20,
marginBottom:20,
},
inside:{
    textAlign:"center",
    color:"white",
    justifyContent:"space-around",

},
inside1:{
    textAlign:"center",
    color:"black",
    justifyContent:"space-around",

},
container:{
    marginBottom:30,
    height:100,
    width: 300,
    alignSelf:"center",
    borderRadius:10,
    backgroundColor: "#1e699d",
    justifyContent:"space-around",

},
container1:{
    display: 'flex',
    flexDirection: 'column',
    marginRight:"auto",
    marginBottom:30,
    height:100,
    width: 150,
    // alignSelf:"",
    borderRadius:10,
    backgroundColor: "#1e699d",
    justifyContent:"space-around",

},
image:{
    width:'100%',
    resizeMode: 'stretch',
    height:350,
    marginBottom:30,
    
},

})

export default Work
