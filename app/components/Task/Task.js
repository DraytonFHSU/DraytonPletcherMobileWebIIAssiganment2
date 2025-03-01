import React from 'react'
import {Text, StyleSheet, View, ScrollView, Image} from "react-native";
import TaskProperties from './TaskProperties';

export default function Task() {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/Mad_Duck.jpg")}
        />
        <Text style={styles.title}>Task Title</Text>
        <Text style={styles.description}>Task Description</Text>
      </View>
      <TaskProperties />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#b8860b',
    flexDirection: "column",
    padding: 25,
    paddingTop: 20,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: '#FFF',
  },
})