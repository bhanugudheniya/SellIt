/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import{
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import Dashboard from './components/Dashboard';
import HeaderComponent from './components/HeaderComponent';
import Dashboard from "./components/Dashboard";
import Work from "./components/Work";
import About from "./components/About";
// import Network from "./components/Network";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import PhoneModel from "./components/PhoneModel";
import Device from "./components/Device";
import HomePage from "./components/HomePage";
import { ScreenStack } from 'react-native-screens';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(85, 66, 118)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255,255, 255)',
    text: 'rgb(28, 28, 30)',
    // border: 'rgb(199, 199, 204)',
  },
};

function userDashboardDrawer() {
  return (
    
    <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
      {/* <Stack.Screen name="HomePage  " component={HomePage}  /> */}
      <Stack.Screen name="Dashboard" component={Dashboard}  />
      <Stack.Screen name="PhoneModel" component={PhoneModel} />
      <Stack.Screen name="Device" component={Device} />
      {/* <Stack.Screen name="Device" component={Device} /> */}
      {/* <Stack.Screen name="How It Works" component={Work} />
      <Stack.Screen name="About Us" component={About} /> */}
   
    </Stack.Navigator>
  );
}
// Drawer
function DashboardDrawer(){
  return(
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={userDashboardDrawer} />
      <Drawer.Screen name="How It Works" component={Work} />
      <Drawer.Screen name="About Us" component={About} />
      {/* <Drawer.Screen name="Our Network" component={Network} /> */}
      <Drawer.Screen name="FAQ" component={FAQ} />
      <Drawer.Screen name="Contact Us" component={Contact} />
      <Drawer.Screen name="Phone Model" component={PhoneModel} />
      <Drawer.Screen name="Device" component={Device} />
      <Drawer.Screen name="HomePage" component={HomePage} />

    </Drawer.Navigator>
  )
}

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage" headerMode = "none">
          <Stack.Screen name = "HomePage" component ={HomePage}/>
          <Stack.Screen name = "Dashboard" component ={DashboardDrawer}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

  

export default App;
