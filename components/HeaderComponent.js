import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { DrawerActions } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'

export class HeaderComponent extends Component {

    toggle = () => {
        this.props.rootProps.navigation.dispatch(DrawerActions.toggleDrawer())
    }

    render() {
        return (
            <>
                <View style={styles.container}>

                    <View style={styles.hamburgerIcon} >
                        <TouchableOpacity onPress={()=>this.toggle()}>
                            {/* <Image source={require('../assets/images/menu.png')} style={styles.icons} /> */}

                            {/* <FontAwesomeIcon icon={ faBars } size={30} style={styles.icons} onPress={()=>this.toggle()} /> */}


                            <View style={styles.lines}></View>
            <View style={styles.lines}></View>
            <View style={styles.lines}></View>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.title}>
                        <Text style={styles.titleText}>{this.props.name}</Text>
                    </View>
                    <View style={styles.second}></View>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        height: 50,
        backgroundColor: '#1e699d',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        fontFamily: 'Montserrat-Black',
        fontSize: 32
        //         shadowColor: "#000",
        // shadowOffset: {
        // 	width: 0,
        // 	height: 0,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 5,
    },
    icons: {
        width: 35,
        marginTop: 10 ,
        marginLeft: 5,
        height: 40,
        color:"#fff"
    },
    lines: {
        borderColor: "#000",
        borderWidth: 2,
        width: "80%",
        marginLeft: "10%",
        marginVertical: 6
    },
    hamburgerIcon: {
        // Color:"white",
        flex: 0.5,
        
        // backgroundColor:'red'
    },
    title: {
        flex: 2,
        // backgroundColor:'green'
    },
    titleText: {
        fontSize: 25,
        marginTop: "5%",
        alignSelf: 'center',
        color: '#fff',
        fontFamily:'Lato-Italic',
    },
    second: {
        flex: 0.5
    }

});


export default HeaderComponent
