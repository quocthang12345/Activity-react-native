import  React  from "react";

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import image from "../img/img"


export default function ActivityComponent(props){


    return(
        <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate('Activity',{ 
            name: props.activity.title,
            item: props.activity.item
        }) } >
            <View style={styleActivity.viewActivity}>
                <Text style={styleActivity.textActivity}>{props.activity.title}</Text>
                <Image source={image[props.activity.img]} style={{width: 64, height: 64}}/>  
            </View>
        </TouchableOpacity>
    )
}

const styleActivity = StyleSheet.create({
    viewActivity:{
        width:"100%",
        marginBottom:15,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        shadowRadius:20,
        shadowColor:"#c1c1c1",
        shadowOpacity:0.6,
        paddingVertical:8,
        backgroundColor:"#fff"
    },
    textActivity:{
        fontFamily:"Arial",
        fontSize:16,
        fontWeight:"600",
        textTransform: "uppercase",
        marginBottom:5
    }
})

