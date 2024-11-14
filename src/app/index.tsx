import { FlatList, Text, View } from "react-native";
import { s } from "../style";


import Card from "@/components/card";
import { TodoContext } from "@/context/todoContext";
import { useContext } from "react";


export default function Index(){

  const {
    list,
  } = useContext(TodoContext)

  return(
    <View style={s.container}>
      <View>
        <Text style={s.title}>Lista de Tarefas</Text>
        <Text style={s.p}>Da galera!</Text>
      </View>

      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Card data={item} />}
        style={s.list}
      />

    </View>
  )
}


