import React from 'react';
import {View,Text,StyleSheet,SafeAreaView,StatusBar,TouchableOpacity,FlatList} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
export default function App(){
  return(
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor="#171d31" barStyle="light-content"/>

      <View style={style.container}>
        <Text style={style.title}>Minhas Tarefas</Text>
      </View>

      <TouchableOpacity style={style.fab}>
      <IconAntDesign name="plus" size={35} color="#fff"/>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#171d31'
  },
  title:{
    marginTop: 10,
    paddingBottom: 15,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  fab:{
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: "#0094ff",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 30,
    bottom: 30,
    elevation: 2,
    zIndex: 9,
    shadowColor: 0.2,
    shadowOffset:{
      width: 1,
      height: 3,

    }
  }
})
