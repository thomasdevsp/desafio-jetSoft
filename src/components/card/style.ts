import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5555',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },

  checkBoxContainer: {
    marginLeft: 10,
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },

  title: {
    width: "100%",
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  statusContainer: {
    flexDirection: "row",
    gap: 10,
  },

  text: {
    width: 90,
    color: '#fff',
    fontSize: 14,
  },


})
