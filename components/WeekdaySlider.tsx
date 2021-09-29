import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const WeekdaySlider = () => {
  
  const pressedDay = () => {
    console.log(`Nu klickade jag på en dag`)};

  return (
    <View style={styles.container}>
      <Text style={styles.textWeek}>Gäller v.12</Text>
      <View style={styles.textBox}>
        <TouchableOpacity onPress={() => pressedDay()}>
          <Text style={styles.innerText}>Måndag</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressedDay()}>
          <Text style={styles.innerText}>Tisdag</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressedDay()}>
          <Text style={styles.innerText}>Onsdag</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressedDay()}>
          <Text style={styles.innerText}>Torsdag</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressedDay()}>
          <Text style={styles.innerText}>Fredag</Text>
        </TouchableOpacity>
                 
      </View>
    </View>
  );
};

export default WeekdaySlider;

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textWeek: {
    fontSize: 10,
  },
  textBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  innerText: {
    color: "gray",
    fontWeight: "normal"
  },
  // TODO: This should be used for pressd/selected day
  innerTextPressed: {
    color: "black", 
    fontWeight: "bold"
  }
});
