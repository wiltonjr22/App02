import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function TaskList({data, handleDelete}){
    return(
        <View style={style.container}>
           <TouchableOpacity onPress ={ () => handleDelete(data) }>
            <AntDesign name="checkcircleo" size = {30} color = "#121212" />
           </TouchableOpacity>
           <View>
            <Text style={style.task}> {data.task} </Text>
           </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        margin: 5,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 15,
        padding: 8,
        elevation: 1.5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 1,
            height: 3
        } 
    },
    task:{
        color: '#121212',
        paddingRight: 20,
        paddingLeft: 8,
        fontSize: 20,
    },
});