import React, { useState } from 'react';
import {View,Text,StyleSheet,SafeAreaView,StatusBar,TouchableOpacity,FlatList, Modal, TextInput} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import TaskList from './src/components/TaskList';

export default function App(){
  const [task, setTask] = useState([
    { key: 1, task: 'comprar pao'},
    { key: 2, task: 'comprar arroz'},
    { key: 3, task: 'ir para academia'},
    { key: 4, task: 'comprar carro'},
  ]);

  const [open,setOpen] = useState (false);

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

      <Modal animationType="slide" transparent={false} visible={open}>
        <SafeAreaView style={style.modal}>
          <View style={style.modalHeader}>
            <TouchableOpacity style={{marginLeft: 10, marginRight: 10}} onPress={ () => setOpen(false) }>
              <IconAntDesign name="arrowleft" size={35} color="#fff"/>
            </TouchableOpacity>
            <Text style={style.modalTittle}>Nova Tarefa</Text>
          </View>

          <View style={style.modalBody}>
            <TextInput
            placeholder="O que precisa fazer hoje?"
            style={style.input}
            />
            <TouchableOpacity style={style.handleAdd}>
              <Text style={style.handleAddText}> Cadastrar </Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>
      </Modal>

      <TouchableOpacity style={style.fab} onPress= { () => setOpen(true)}>
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
  },
  modal:{
    flex: 1,
    backgroundColor: '#171d31',
  },
  modalHeader:{
    marginLeft: 10,
    marginTop: 25,
    flexDirection:'row',
    alignItems: 'center',
  },
  modalTittle:{
    marginLeft: 15,
    fontSize: 25,
    color: "#fff",
  },
  modalBody:{
    marginTop: 15,
  },
  input:{
    fontSize: 15,
    marginLeft: 10,
    marginTop: 30,
    marginRight: 10,
    backgroundColor:"#fff",
    padding: 9,
    height: 85,
    textAlignVertical:'top',
    color: "#000",
    borderRadius: 5,
  },
  handleAdd:{

  }
})


