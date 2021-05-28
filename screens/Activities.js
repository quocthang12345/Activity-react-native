import  React, { useState }  from "react";
import { FlatList, ScrollView, StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import ActivityItem from "../components/activity/ActivityComponent"
import axios from "axios";
import { useEffect } from "react";




export default function Activities({ navigation }){
    useEffect(() => {
        axios.get("http://192.168.1.220:3000/activities").then(res => {
            setItemActivity(res.data);
        }).catch(error => { console.log(error) })
    },[listItemActivity])

    const[listItemActivity, setItemActivity] = useState([]);
    return(
        <ScrollView style={styles.viewFlat}> 
            <FlatList
            data={listItemActivity}
            renderItem = {({ item }) => (
                    <ActivityItem activity={item} navigation={navigation} />
            )}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={{paddingHorizontal: 16,paddingVertical:16}}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewFlat: {
      width:"100%",
      height:"100%",
      backgroundColor: '#fff'
    }
  });
