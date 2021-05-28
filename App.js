import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartStack from "./navigationStack/CartStack"
import HomeStack from "./navigationStack/HomeStack"
import SettingStack from "./navigationStack/SettingStack"
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator style={styles.container}
                     screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        if (route.name === 'HomeStack') {
                          iconName = 'ios-home';
                        } else if (route.name === 'SettingStack') {
                          iconName = 'ios-settings';
                        } else if (route.name === 'CartStack') {
                          iconName = 'ios-cart';
                        } 
                        return <Ionicons name={iconName} size={size} color={color} />;
                      },
                    })}
                    tabBarOptions={{
                      activeTintColor: 'tomato',
                      inactiveTintColor: 'gray',
                    }} 
                      >
          <Tab.Screen name="HomeStack" component={HomeStack}  
          options={{
          title: 'Home'
         }} 

          />
          <Tab.Screen name="CartStack" component={CartStack}  
          options={{ 
            title: "Cart"
           }} />

          <Tab.Screen name="SettingStack" component={SettingStack}  
          options={{ 
            title: "Setting"
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor:"yellow",
    borderTopWidth:1
  },
});


