import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Touchable, TouchableOpacityBase } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const WeekdaySlider = () => {
  let monday, tuesday, wednesday, thursday, friday;
  
  function onPress(day: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" ) {
    console.log("Nu klickade jag!");
    day == "monday"? monday=true : monday=false;
    day == "tuesday"? tuesday=true : tuesday=false;
    day == "wednesday"? wednesday=true : wednesday=false;
    day == "thursday"? thursday=true : thursday=false;
    day == "friday"? friday=true : friday=false;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textWeek}>Gäller v.12</Text>
      <View style={styles.textBox}>
        <TouchableOpacity onPress={() => onPress("monday")}>
          <Text style={(monday? {color: "black", fontWeight: "bold"} : {color: "gray", fontWeight: "normal" })}>Måndag</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress("tuesday")}>
          <Text style={(tuesday? {color: "black", fontWeight: "bold"} : {color: "gray", fontWeight: "normal" })}>Tisdag</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress("wednesday")}>
          <Text style={(wednesday? {color: "black", fontWeight: "bold"} : {color: "gray", fontWeight: "normal" })}>Onsdag</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress("thursday")}>
          <Text style={(thursday? {color: "black", fontWeight: "bold"} : {color: "gray", fontWeight: "normal" })}>Torsdag</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress("friday")}>
          <Text style={(friday? {color: "black", fontWeight: "bold"} : {color: "gray", fontWeight: "normal" })}>Fredag</Text>
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
  }
});
