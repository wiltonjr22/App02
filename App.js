import React, { useState, useCallback } from 'react';
import {View,Text,StyleSheet,SafeAreaView,StatusBar,TouchableOpacity,FlatList, Modal, TextInput, AsyncStorage } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import TaskList from './src/components/TaskList';

export default function App(){
  const [task, setTask] = useState([]);
  const [open,setOpen] = useState (false);
  const [input,setInput] = useState ('');

function handleAdd(){
  if(input === '') return;

  const data = {
    key: input,
    task: input
  };

  setTask([...task,data]);
  setOpen(false);
  setInput('');
}

  const handleDelete = useCallback((data) => {
    const find = task.filter(r => r.key !== data.key);
    setTask(find);
  })

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
      renderItem={({item}) => <TaskList data={item} handleDelete={handleDelete} /> }
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
            multiline={true}
            placeholderTextColor="#747474"
            autoCorrect={false}
            placeholder="O que precisa fazer hoje?"
            style={style.input}
            value={input}
            onChangeText={ (texto) => setInput(texto) }
            />
            <TouchableOpacity style={style.handleAdd} onPress = {handleAdd}>
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
    backgroundColor: '#0094ff',
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
    color: '#fff',
  },
  modalBody:{
    marginTop: 15,
  },
  input:{
    fontSize: 15,
    marginLeft: 10,
    marginTop: 30,
    marginRight: 10,
    backgroundColor:'#fff',
    padding: 9,
    height: 85,
    textAlignVertical:'top',
    color: "#000",
    borderRadius: 5,
  },
  handleAdd:{
    backgroundColor: '#fff',
      marginTop: 10,
      alignItems:'center',
      justifyContent: 'center',
      marginLeft: 10,
      marginRight: 10,
      height: 40,
      borderRadius: 5
  },
  handleAddText:{
    fontSize: 20,
  },
})


