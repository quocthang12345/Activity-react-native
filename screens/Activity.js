import  React, { useState,useEffect }  from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View, Image, Alert } from 'react-native';
import axios from "axios";
import image from "../img/img"

export default function Activity({ route }){

    const[addToCart,setAdd] = useState({
        isAdded:false,
        indexActive: -1
    });

    useEffect(() => {
        axios.get("http://192.168.1.220:3000/cart").then(res => {
            setOrdered(res.data);
        }).catch(error => {
            console.log(error);
        })
    },[cartOrdered])

    const [cartOrdered, setOrdered] = useState([]);



    return(       
        <View style={stylesProduct.viewProducts}>
            {
                route.params.item == null ? (<View></View>):(
                    route.params.item.map((i,index) => {
                        console.log(cartOrdered.some(cart => cart.itemName === i.itemName));
                        return(
                        <View style={stylesProduct.viewProductDetail}>
                            <Image source={image[i.img]} style={{width: 180, height: 128, marginBottom: 10}}/> 
                            <Text style={{fontSize: 16, fontWeight:"600",color:"black" , textAlign:"center"}}>{i.itemName}</Text>
                            <View style={stylesProduct.viewPrice}>
                                <Text style={{fontSize: 14, color:"gray"}}>{i.price}</Text>
                                {
                                ((addToCart.isAdded && (addToCart.indexActive == index)) || (cartOrdered.some(cart => cart.itemName == i.itemName))) ?   (<Text style={{fontSize: 14, color:"gray"}}>Added</Text>):
                                            (<Text style={{fontSize: 14, color:"blue"}} onPress={()=>{
                                                axios.post('http://192.168.1.220:3000/cart',{
                                                    ...i
                                                }).then(res => {
                                                    setAdd({
                                                        isAdded: !addToCart.isAdded,
                                                        indexActive:index
                                                    });
                                                    Alert.alert("Added to cart")
                                                })
                                            }}>Mua +</Text>)
                                }
                            </View>

                            
                        </View>
                        )
                    })
                )
            }
             
        </View>
    )
}

const stylesProduct = StyleSheet.create({
    viewProducts:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    viewProductDetail:{
        textAlign:"center",
        justifyContent:"center",
        paddingBottom:8,
        marginVertical:16,
        backgroundColor:"#fff",
        // height:"fit-content",
        // width:"fit-content",
        height:200,
        width:180,
        borderRadius:4,
        shadowColor:"white",
        shadowOpacity:0.7,
        shadowRadius:8
    },
    viewPrice:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:6,
        marginHorizontal:8
    }

})