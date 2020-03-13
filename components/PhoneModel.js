
import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
// import { faCalendarAlt, faMoneyCheck, faChalkboard, faBus, faBusAlt, faChalkboardTeacher, faFileAlt, faBriefcase, faUniversity } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import HeaderComponent from './HeaderComponent';

export class PhoneModel extends Component {
    render() {
        return (
            <>
            <HeaderComponent name="Dashboard" rootProps={this.props} />
            <View style={styles.MainBoard}>
            <ScrollView style={{ display: 'flex', flexDirection: 'column' }}>

              {/* Row 1 */}
          <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity style={styles.Card} onPress={()=>this.props.navigation.navigate('PhoneModel')}>
              <View style={styles.iconTextAlign}>
                {/* <FontAwesomeIcon icon={faCalendarAlt} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/apple7.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Apple 7</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={()=>this.props.navigation.navigate('Fees')}>
              <View style={styles.iconTextAlign}>
                {/* <FontAwesomeIcon icon={faMoneyCheck} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/apple8.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Apple 8 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('Notice')}>
              <View style={styles.iconTextAlign} >
                {/* <FontAwesomeIcon icon={faChalkboard} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/apple7.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Apple 6</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity style={styles.Card} onPress={()=>this.props.navigation.navigate('PhoneModel')}>
              <View style={styles.iconTextAlign}>
                {/* <FontAwesomeIcon icon={faCalendarAlt} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/apple8.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Apple 7</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={()=>this.props.navigation.navigate('Fees')}>
              <View style={styles.iconTextAlign}>
                {/* <FontAwesomeIcon icon={faMoneyCheck} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/apple7.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Apple 8 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('Notice')}>
              <View style={styles.iconTextAlign} >
                {/* <FontAwesomeIcon icon={faChalkboard} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/apple8.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Apple 6</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row' }}>

            <TouchableOpacity style={styles.Card} onPress={()=>this.props.navigation.navigate('PhoneModel')}>
              <View style={styles.iconTextAlign}>
                {/* <FontAwesomeIcon icon={faCalendarAlt} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/apple7.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Apple 7</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={()=>this.props.navigation.navigate('Fees')}>
              <View style={styles.iconTextAlign}>
                {/* <FontAwesomeIcon icon={faMoneyCheck} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/apple8.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Apple 8 </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('Notice')}>
              <View style={styles.iconTextAlign} >
                {/* <FontAwesomeIcon icon={faChalkboard} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/apple7.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Apple 6</Text>
              </View>
            </TouchableOpacity>
          </View>
          

        </ScrollView>
        </View>
          </>        
          )
    }
}
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
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: "red",
    marginBottom:10,

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
    display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'
  },

  CardImage:{
    width:100,
    height:100,
  },

});

export default PhoneModel
