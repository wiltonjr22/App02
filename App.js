import React, { useState } from 'react';
import {View,Text,StyleSheet,SafeAreaView,StatusBar,TouchableOpacity,FlatList} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import TaskList from './src/components/TaskList';

export default function App(){
  const [task, setTask] = useState([
    { key: 1, task: 'comprar pao'},
    { key: 2, task: 'comprar arroz'},
    { key: 3, task: 'ir para academia'},
    { key: 4, task: 'comprar carro'},
  ]);

  return(
    <SafeAreaView style={style.container}>
     

      <View style={style.container}>
        <Text style={style.title}>Minhas Tarefas</Text>
      </View>

      <FlatList
      marginHorizontal={10}
      showsHorizontalScrollIndicator={false}
      data={task}
      keyExtractor={ (item) => String(item.key)}
      renderItem={({item}) => <TaskList data={item} /> }
      />

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


