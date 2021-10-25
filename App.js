/**
 * App.js - Navigation bar with bottom nav
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Home from './components/Home/Home';
import Shopping from './components/Shopping/Shopping';
import Travel from './components/Travel/Travel'
import Contact from './components/Contact/Contact';

/* function ContactUs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="General" component={General} />
      <Tab.Screen name="Tour Operators" component={Tours} />
    </Tab.Navigator>
  );
} */

export default function App() {
  return (

    <NavigationContainer>    
        <Tab.Navigator>
          <Tab.Screen name="home" component={Home}/>
          <Tab.Screen name="shopping" component={Shopping}/>
          <Tab.Screen name="travel" component={Travel}/>
          <Tab.Screen name="contact" component={Contact}/>
        </Tab.Navigator>
      </NavigationContainer>
   
  );
}


