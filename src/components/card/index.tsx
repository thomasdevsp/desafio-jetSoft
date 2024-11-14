import { Text, View } from "react-native";
import { s } from "./style";

import { ListProps } from "@/context/todoContext";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Card({data}: {data: ListProps}) {

  return (
    <View style={s.cardContainer}>
      <View style={s.checkBoxContainer}>
        <BouncyCheckbox
        size={20}
        onPress={(isChecked: boolean) => {}}
        />
      </View>

      <View style={s.textContainer}>
       <Text style={s.title}>{data.title}</Text>


        <View style={s.statusContainer} >
          <Text style={s.text}>{data.date}</Text>
          <Text style={s.text}>{data.status}</Text>
        </View>
      </View>
    </View>
  )
}
