
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from "../screens/Cart"

const CartStackNav = createStackNavigator();

export default function CartStack() {
  return (
    <CartStackNav.Navigator>
      <CartStackNav.Screen name="Cart" 
                          component={Cart} 
                          options={{
                            title: "Cart",
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
      {/* <CartStackNav.Screen name="Activity"
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
                           }} /> */}
    </CartStackNav.Navigator>
  );
}