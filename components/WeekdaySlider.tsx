import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WeekInfo, Weekday } from "../contexts/BistroContext";

interface Props {
  onChange: (data: WeekInfo) => void;
}

const WeekdaySlider = ({ onChange }: Props) => {
  let currentWeekNumber = require("current-week-number");
  const weekNumber = currentWeekNumber();
  const [selectedDay, setSelectedDay] = useState<Weekday>("monday");
  const pressedDay = (weekday: Weekday) => {
    setSelectedDay(weekday);
    onChange({ weekday, weekNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textWeek}>Gäller v.{weekNumber}</Text>
      <View style={styles.textBox}>
        <TouchableOpacity onPress={() => pressedDay("monday")}>
          <Text
            style={[
              styles.innerText,
              selectedDay === "monday" ? styles.innerTextPressed : null,
            ]}
          >
            Måndag
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressedDay("tuesday")}>
          <Text
            style={[
              styles.innerText,
              selectedDay === "tuesday" ? styles.innerTextPressed : null,
            ]}
          >
            Tisdag
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressedDay("wednesday")}>
          <Text
            style={[
              styles.innerText,
              selectedDay === "wednesday" ? styles.innerTextPressed : null,
            ]}
          >
            Onsdag
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressedDay("thursday")}>
          <Text
            style={[
              styles.innerText,
              selectedDay === "thursday" ? styles.innerTextPressed : null,
            ]}
          >
            Torsdag
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => pressedDay("friday")}>
          <Text
            style={[
              styles.innerText,
              selectedDay === "friday" ? styles.innerTextPressed : null,
            ]}
          >
            Fredag
          </Text>
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
    backgroundColor: "#fff",
  },
  textWeek: {
    fontSize: 10,
  },
  textBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  innerText: {
    color: "gray",
    fontWeight: "normal",
  },
  innerTextPressed: {
    color: "black",
    fontWeight: "bold",
  },
});
