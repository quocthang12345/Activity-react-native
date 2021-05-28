import  React, { useState }  from "react";
import { FlatList, ScrollView,Image, StyleSheet, Text, View , TouchableOpacity, Button, TouchableHighlight} from 'react-native';
import axios from "axios"
import { useEffect } from "react";
import Swipeout from 'react-native-swipeout';




export default function Cart({ navigation }){

    const swipeSettings={
        autoClose:true,
        onClose:(secId,rowId,direction)=>{
            if(this.state.activeRowkey!=null){
                this.setState({activeRowkey:null});
            }
        },
        onOpen:(secId,rowId,direction)=>{
            this.setState({activeRowkey:this.props.item.key})
        },
        right:[
            {
                onPress:()=>{
                    const deletingRow = this.state.activeRowkey;
                    Alert.alert(
                        'Alert',
                        'Are you sure you want do delete ?',
                        [
                            {text:'NO',onPress: () => console.log('Cancel Pressed'), style:'cancel'},
                            {text:'Yes',onPress: () =>{
                                itemCart.splice(this.props.index,1);
                                //Refesh FlatList .
                                this.props.parentFlatList.refreshFlatList(deletingRow);
                            }},
                        ],
                        {cancelable:true}

                    );
                },
                text:'Delete',type:'delete'
            }
        ],
        rowId:this.props.index,
        sectionId:1,
    }

    const [itemCart, setItemCart] = useState([]);
    

    useEffect(() => {
        axios.get("http://192.168.1.220:3000/cart").then(res => {
        setItemCart(res.data);
        }).catch(error => {
            console.log(error);
        })
    },[itemCart])


 
    function updateQuantity(quantity,item){
        axios.put(`http://192.168.1.220:3000/cart/${item.id}/`,
        {
            ...item,
            quantity: quantity
        }
        ).then(res => {
            if(res.data.quantity < 1) {
                axios.delete(`http://192.168.1.220:3000/cart/${res.data.id}/`)
                .then()
                .catch(error => {
                    console.log(error);
                })
            }
        }).catch(error => {
            console.log(error);
        })
    }


    
    return(
        <View style={{position:"relative",height:"100%"}}> 
            <ScrollView style={styles.viewContainer}>
                {
                    itemCart.map(item => {
                        return(
                        <Swipeout {...swipeSettings}>
                            <View style={styles.viewCart}>
                                <View style={styles.viewDescription}>
                                    <View style={styles.viewPrice}>
                                        <Text style={{fontSize:35}}>{item.time}</Text>
                                        <Text style={{color:"gray",opacity:"0.8"}}>{item.note}</Text>
                                    </View>
                                </View>
                                <View style={styles.viewCount}>
                                    <TouchableOpacity style={styles.buttonCount} onPress={() => {updateQuantity((item.quantity - 1),item)}}>
                                        <Text style={styles.textCountLeft}>-</Text>
                                    </TouchableOpacity>
                                        <Text style={{marginHorizontal:10,fontWeight:"600",fontSize:16}}>{item.quantity}</Text>
                                    <TouchableOpacity style={styles.buttonCount} onPress={() => {updateQuantity((item.quantity + 1),item)}}>
                                        <Text style={styles.textCountRight}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Swipeout>

                        )
                    })
                }
                
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
      flex:1,
    },
    viewCart:{
        backgroundColor:"#fff",
        zIndex:2,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        paddingVertical:16,
        borderBottomWidth:1,
        borderBottomColor:"black",
        marginLeft:8
    },
    viewDescription:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    viewImgProduct:{
        width:64,
        height:64,
        marginRight:15  
    },
    viewPrice:{
        flexDirection:"column",
        justifyContent:"space-between",
        fontFamily:"Arial",
        fontSize:20,
        fontStyle:"normal",
        height:60
    },
    viewCount:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        height:50
    },
    buttonCount:{
        width:24,
        height:24,
        borderRadius:12,
        borderColor:"gray",
        borderWidth:1,
        backgroundColor:"gray",
        zIndex:2,
        position:"relative"
    },
    textCountLeft:{
        color:"#fff",
        fontSize:40,
        textAlign:"center",
        position:"absolute",
        top: -16,
        left: 2
    },
    textCountRight:{
        color:"#fff",
        fontSize:30,
        textAlign:"center",
        position:"absolute",
        top: -10,
        left: 2
    },
    viewPay:{
        backgroundColor:"#fff",
        // position:"sticky",
        bottom:0,
        left:0,
        right:0,
        width:"100%",
        zIndex:2,
        paddingVertical:16,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    viewTotal:{
        flexDirection:"column",
        justifyContent:"space-around",
        height:50
    },
    buttonOrder:{
        paddingHorizontal:30,
        paddingVertical:8,
        // backgroundColor:rgb(98,164,212),
        backgroundColor:'rgb(50,143,171)',
        borderRadius:2
    }

  });
