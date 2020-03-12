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

            <View style={styles.container}>
                <Text style={styles.inside1}>What do you mean by Sell It ?</Text>
                <Text style={styles.inside}>Sell It is a simple online electronics sale platform through which you can sell your old / used Mobile Phone, Smartphone, Tablet, Apple iPhone and Apple iPad etc. at best resale assured value. Currently we are accepting orders for above devices however many more electronic devices will be added to our catalogue in coming days.</Text>
                        </View>
 
                        <View style={styles.container1}>
                <Text style={styles.inside1}>How Sell It operates ?</Text>
                <Text style={styles.inside}>1. Logon to www.Sell It.com and find your device (e.g. Apple iPhone, Samsung Galaxy Smartphones .. )</Text>
                <Text style={styles.inside}>2. Once you have found your device, please answer few simple questions about current condition of device.</Text>
                <Text style={styles.inside}>3. Get an instant sell quote for your device based on the answers submitted by you.</Text>
                <Text style={styles.inside}>4. If you are happy with the quoted price; fill your contact and pickup address details along with preferred pickup date time slot and mode of payment.</Text>
                <Text style={styles.inside}>5. We will arrange free pickup of your device as per pickup date time slot selected by you.</Text>
                <Text style={styles.inside}>6. At the time of pickup, if the actual condition of your device matches with information provided by you while placing the order then company authorized pickup executive / service partner will initiate payment as per your selected mode of payment.</Text>
                <Text style={styles.inside}>However, if actual device condition does not matches; then you will be given a revised offer on the spot.
You will have the option to accept or decline the new offer.</Text>
                        </View>

                        <View style={styles.container2}>
                <Text style={styles.inside1}>Which Indian cities does Sell It operate ?</Text>
                <Text style={styles.inside}>We are expanding our Service Network to all major cities of India. Kindly scroll down to refer the Cities Served section of Website Footer to see list of cities.</Text>
                        </View>


                        <View style={styles.container}>
                <Text style={styles.inside1}>Which types of electronic devices does Sell It deals in ?</Text>
                <Text style={styles.inside}>Sell It currently deals in all major brands for Smartphones & Tablets including Apple, Asus, Blackberry, Gionee, Google, HTC, Huawei, Intex, Karbonn, Lava, LeEco, Lenovo, LG, Micromax, Motorola, Nokia, OnePlus, Oppo, Panasonic, Samsung, Sony, Vivo, Xiaomi, Xolo, Yu etc. Our Product Services team works round the clock to add newly launched devices !!</Text>
                        </View>

                        <View style={styles.container3}>
                <Text style={styles.inside1}>What is meant by free door step pick up and instant payment ?</Text>
                <Text style={styles.inside}>Free door step pick up means company authorized pickup executive / service partner will come to the pickup address provided by you at the time of placing the order to personally evaluate your device condition as selected by you while placing the order. If the actual condition of your device matches with the order description, we will pay you on the spot, issue a purchase / service receipt and collect the device from you.</Text>
                        </View>

                        <View style={styles.container4}>
                <Text style={styles.inside1}>What is a revised offer and what it is based upon?</Text>
                <Text style={styles.inside}>1. A revised offer is given to you when at the time of pick up ; company authorized pickup executive / service partner finds that if the actual device condition differs from the description mentioned when you placed the order on our website.</Text>
                <Text style={styles.inside}>2. A revised offer may be higher or lower than the price quoted originally to you on the website. </Text>
                <Text style={styles.inside}>3. In circumstances of a revised offer ; you have the option of accepting or rejecting the same.</Text>
                <Text style={styles.inside}>4. If accepted by you, payment will be done instantly. If rejected, your order will be cancelled and we will look forward to serve you again in future.</Text>
                        </View>

                        <View style={styles.container4}>
                <Text style={styles.inside1}>Do I need to show my ID proof to sell my device ?</Text>
                <Text style={styles.inside}>Yes. This is a legal requirement as we need to verify the proof of ownership of each device we buy. This prevents trading of stolen goods and helps in keeping the stolen devices out of recycling system. We request you to keep your Aadhar Card (with additional residential & employment proof) ready for verification at the time of pickup. Do not worry about misuse of your personal ID as company authorized pickup executive / service partner will scan the ID and ID data will be directly uploaded on our secure application gateway in front of you after establishing your identity.</Text>
                        </View>


            </ScrollView>
            </>
        )
    }
}
const styles = StyleSheet.create({
    inside:{
        // textAlign:"center",
        color:"grey",
        justifyContent:"space-around",
    
    },
    inside1:{
        // textAlign:"center",
        color:"black",
        justifyContent:"space-around",
        textDecorationLine:"underline",
    
    },
    container:{
        marginTop:20,
        marginBottom:30,
        height:200,
        width: 300,
        alignSelf:"center",
        borderRadius:10,
        backgroundColor: "#ffffff",
        justifyContent:"space-around",
    
    },
    container1:{
        marginTop:20,
        marginBottom:30,
        height:700,
        width: 300,
        alignSelf:"center",
        borderRadius:10,
        backgroundColor: "#ffffff",
        justifyContent:"space-around",
    },
    container2:{
        marginTop:20,
        marginBottom:30,
        height:150,
        width: 300,
        alignSelf:"center",
        borderRadius:10,
        backgroundColor: "#ffffff",
        justifyContent:"space-around",
    
    },
    container3:{
        marginTop:20,
        marginBottom:30,
        height:250,
        width: 300,
        alignSelf:"center",
        borderRadius:10,
        backgroundColor: "#ffffff",
        justifyContent:"space-around",
    
    },
    container4:{
        marginTop:20,
        marginBottom:30,
        height:350,
        width: 300,
        alignSelf:"center",
        borderRadius:10,
        backgroundColor: "#ffffff",
        justifyContent:"space-around",
    
    },

})

export default FAQ
