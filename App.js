import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import FirstAidScreen from './src/Screens/FirstAidScreen';
import RegisterScreen from './src/Screens/RegisterScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterationHistory from './src/Screens/RegisterationHistory';
import RegisteringAmbulanceScreen from './src/Screens/RegisteringAmbulanceScreen';
import TestScreen from './src/Screens/TestScreen';
import SearchScreen from './src/Screens/SearchScreen';
import User from './src/Screens/SignupcloneScreen';
import Splash from './src/Screens/Splash';
import ExploreScreen from './src/Screens/ExploreScreen';
import OnboardingScreen from './src/Screens/OnboardingScreen';
import GoogleSignIn from './src/Screens/GoogleSignIn';
import PhoneSignIn from './src/Screens/PhoneSignIn';
import ChooseScreen from './src/Screens/ChooseScreen';
import RegisterDriver from './src/Screens/RegisterDriver';
import Bottom from './src/Screens/Bottom';
import AmbulanceContext, { Context } from './src/context/AmbulanceContext';


const Drawer = createDrawerNavigator();

 function DrawerNext() {
  return (
    
        <AmbulanceContext>
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="FirstAid" component={FirstAidScreen} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="History" component={RegisterationHistory} />
        <Drawer.Screen name="Booking" component={RegisteringAmbulanceScreen} />
        <Drawer.Screen name="Test" component={TestScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
        <Drawer.Screen name="phone" component={PhoneSignIn} />
        <Drawer.Screen name="splash" component={Splash} />
        <Drawer.Screen name="google" component={GoogleSignIn} />
        <Drawer.Screen name="Choose" component={ChooseScreen} />
        <Drawer.Screen name="bottom" component={Bottom} />











        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
        </AmbulanceContext>
      
      

  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Test" component={TestScreen} />
    <Stack.Screen name="splash" component={Splash} />

    <Stack.Screen name="Choose" component={ChooseScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Booking" component={RegisteringAmbulanceScreen} />
    <Stack.Screen name="Driver" component={RegisterDriver} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="bottom" component={Bottom} />








      <Stack.Screen name="home" component={DrawerNext} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App