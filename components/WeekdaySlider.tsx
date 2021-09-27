import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


interface TextStyle {
  color: "gray" | "black",
  fontWeight: "normal" | "bold",
}


const WeekdaySlider = () => {
  const [textStyle, setTextStyle] = useState<TextStyle>({color: "gray", fontWeight: "normal"})
  let useColor = textStyle.color;
  let useFontWeight = textStyle.fontWeight;
  const onPress = () => {
    console.log("Nu klickade jag!");
    setTextStyle({color: "black", fontWeight: "bold"});
  };


  return (
    <View style={styles.container}>
      <Text style={styles.textWeek}>Gäller v.12</Text>
      <View style={styles.textBox}>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: useColor, fontWeight: useFontWeight }}>Monday</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: useColor, fontWeight: useFontWeight }}>Tuesday</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: useColor, fontWeight: useFontWeight }}>Wednesday</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: useColor, fontWeight: useFontWeight }}>Thursday</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={{color: useColor, fontWeight: useFontWeight }}>Friday</Text>
        </TouchableOpacity>         
      </View>
    </View>
  );
};

export default WeekdaySlider;

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FFDEDE", //TODO: delete and make backgound behind white/picture!
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
    color: "black",
  }
});
