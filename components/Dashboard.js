
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
// import { faCalendarAlt, faMoneyCheck, faChalkboard, faBus, faBusAlt, faChalkboardTeacher, faFileAlt, faBriefcase, faUniversity } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import HeaderComponent from './HeaderComponent';

export class Dashboard extends Component {
    render() {
        return (
            <>
            <HeaderComponent name="Dashboard" rootProps={this.props} />
            <View>
              <Text>
                Hi
              </Text>
            </View>
          </>        
          )
    }
}
const styles = StyleSheet.create({
    
  });

export default Dashboard
