
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Setting from "../screens/Setting"
import Activity from "../screens/Activity"

const SettingStackNav = createStackNavigator();

export default function SettingStack() {
  return (
    <SettingStackNav.Navigator>
      <SettingStackNav.Screen name="Setting" 
                          component={Setting} 
                          options={{
                            title: "Setting",
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
      <SettingStackNav.Screen name="Activity"
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
    </SettingStackNav.Navigator>
  );
}