
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Activities from "../screens/Activities"
import Activity from "../screens/Activity"

const HomeStackNav = createStackNavigator();

export default function HomeStack() {
  return (
    <HomeStackNav.Navigator initialRouteName="Activities">
      <HomeStackNav.Screen name="Activities" 
                          component={Activities} 
                          options={{
                            title: "Home",
                            headerStyle: {
                              backgroundColor:'#fff'
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign:"center",
                              color:"black"
                            }
                            }} />
      <HomeStackNav.Screen name="Activity"
                           component={Activity}
                           options={{
                            title:"ListItem",
                            headerStyle: {
                              backgroundColor:'#fff',
                              left:20
                            },
                            headerTitleStyle: {
                              fontWeight: 'bold',
                              textAlign:"center",
                              color:"black",
                              paddingRight:50
                            } 
                           }} />
    </HomeStackNav.Navigator>
  );
}