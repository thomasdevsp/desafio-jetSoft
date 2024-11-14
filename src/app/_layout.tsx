import TodoProvider, { TodoContext } from "@/context/todoContext";
import { Feather } from "@expo/vector-icons";
import { Slot } from "expo-router";
import { useContext } from "react";
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function InitProvider() {
  return(
    <TodoProvider>
      <Layout />
    </TodoProvider>
  )
}

function Layout(){
  const {
    modalVisible,
    title,
    date,
    setModalVisible,
    setTitle,
    setDate,
    handleFormSubmit,
   } = useContext(TodoContext)


  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={s.modalView}>
          <View style={s.header}>
            <Text style={s.title}>
              Nova Tarefa
            </Text>

            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={s.closeButton}
            >
              <Feather name="x" style={{width: 20,}} size={20} color={"#fff"} />
            </TouchableOpacity>
          </View>

          <View style={s.inputContainer}>
            <TextInput
              placeholder="Titulo da Tarefa"
              style={s.input}
              defaultValue={title}
              onChangeText={item => setTitle(item)}
            />

            <TextInput
              placeholder="Data: 14/11/2024"
              style={s.input}
              defaultValue={date}
              onChangeText={item => setDate(item)}

            />

            <TouchableOpacity onPress={handleFormSubmit} style={s.sendButton}>
              <Text style={{ color: 'white' }}>
                Adicionar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Slot />

      <View style={s.footer}>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={s.addButton}>
          <Feather name="plus" style={{width: 30,}} size={30} color={"#000000"} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  modalView: {
    height: "100%",
    width: "100%",
    backgroundColor: '#333333',
    padding: 35,
    gap: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footer:{
    width: "100%",
    height: 70,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',

  },

  title: {
    fontSize: 26,
    width: 150,
    color: '#fff',
  },

  inputContainer: {
    gap: 10,
  },

  input: {
    width:"100%",
    borderRadius: 4,
    backgroundColor: '#4d4d4d',
    color: '#fff',
  },

  addButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeButton: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#4d4d4d',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sendButton: {
    width: '100%',
    height: 42,
    borderRadius: 6,
    padding: 6,
    marginTop: 24,
    backgroundColor: '#4d4d4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
