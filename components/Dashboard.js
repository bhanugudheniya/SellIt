
import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
// import { faCalendarAlt, faMoneyCheck, faChalkboard, faBus, faBusAlt, faChalkboardTeacher, faFileAlt, faBriefcase, faUniversity } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import HeaderComponent from './HeaderComponent';

export class Dashboard extends Component {
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
                <Image source={require('../assets/image/apple.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Apple</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={()=>this.props.navigation.navigate('PhoneModel')}>
              <View style={styles.iconTextAlign}>
                {/* <FontAwesomeIcon icon={faMoneyCheck} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/samsung.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Samsung</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('PhoneModel')}>
              <View style={styles.iconTextAlign} >
                {/* <FontAwesomeIcon icon={faChalkboard} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/mi.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Xiaomi</Text>
              </View>
            </TouchableOpacity>

            {/* Row 2 */}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('PhoneModel')}>
              <View style={styles.iconTextAlign}>
                {/* <FontAwesomeIcon icon={faBusAlt} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/moto.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Motorola</Text> 
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('PhoneModel')}>
              <View style={styles.iconTextAlign}>
                {/* <FontAwesomeIcon icon={faChalkboardTeacher} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/google.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Google</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('PhoneModel')}>
              <View style={styles.iconTextAlign} >
                {/* <FontAwesomeIcon icon={faFileAlt} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/lenovo.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Lenovo</Text>
              </View>
            </TouchableOpacity>

            {/* Row 3 */}
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('PhoneModel')}>
            <View style={styles.iconTextAlign}>
            {/* <FontAwesomeIcon icon={faBriefcase} style={styles.ficon} size={40} /> */}
            <Image source={require('../assets/image/one.png')} style={styles.CardImage}/>
              <Text style={styles.textStyles}>One Plus</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('PhoneModel')}>
            <View style={styles.iconTextAlign}>
            {/* <FontAwesomeIcon icon={faUniversity} style={styles.ficon} size={40} /> */}
            <Image source={require('../assets/image/oppo.png')} style={styles.CardImage}/>
              <Text style={styles.textStyles}>Oppo</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('PhoneModel')}>
            <View style={styles.iconTextAlign}>
            {/* <FontAwesomeIcon icon={faUniversity} style={styles.ficon} size={40} /> */}
            <Image source={require('../assets/image/vivo.png')} style={styles.CardImage}/>
              <Text style={styles.textStyles}>Vivo</Text>
            </View>
            </TouchableOpacity>

          </View>


          {/* Row 4 */}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('PhoneModel')}>
              <View style={styles.iconTextAlign}>
                {/* <FontAwesomeIcon icon={faBusAlt} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/sony.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Sony</Text> 
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('PhoneModel')}>
              <View style={styles.iconTextAlign}>
                {/* <FontAwesomeIcon icon={faChalkboardTeacher} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/asus.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Asus</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Card} onPress={() => this.props.navigation.navigate('PhoneModel')}>
              <View style={styles.iconTextAlign} >
                {/* <FontAwesomeIcon icon={faFileAlt} style={styles.ficon} size={40} /> */}
                <Image source={require('../assets/image/honor.png')} style={styles.CardImage}/>
                <Text style={styles.textStyles}>Honor</Text>
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

export default Dashboard
