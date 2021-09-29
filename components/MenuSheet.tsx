import React from "react";
import {
  ScrollView, StyleSheet, Text, View
} from "react-native";
import { BistroData } from "../data/bistroData";

interface Props {
  bistro?: BistroData;
}

export default function MenuSheet({ bistro }: Props) {
  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View>
        <Text style={[styles.font, styles.bistro]}>
          {bistro?.title}
        </Text>
        <Text style={[styles.font, styles.timeAndPrice]}>
          Serveras mellan:{" "}
          {bistro?.lunchOfTheWeekDefault.monday?.lunchStart.toFixed(2)}{" "}
          - {bistro?.lunchOfTheWeekDefault.monday?.lunchEnd.toFixed(2)}
        </Text>
        {bistro?.lunchOfTheWeekDefault.monday?.dishes.map(
          (dish, index) => {
            return (
              <Text style={[styles.font, styles.course]} key={index}>
                {dish}
              </Text>
            );
          }
        )}
      </View>
      <View>
        <Text style={[styles.font, styles.timeAndPrice]}>
          {bistro?.lunchOfTheWeekDefault.monday?.priceFrom}:-
        </Text>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  contentContainer: {
    backgroundColor: "#fff",
    width: 309,
    minHeight: 300,
    opacity: 0.95,
    padding: 20,
    justifyContent: "space-between",
  },
  font: {
    color: "#000",
    fontFamily: "Roboto",
  },
  bistro: {
    fontWeight: "bold",
    fontSize: 23,
    paddingTop: 2,
  },
  timeAndPrice: {
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 5,
  },
  course: {
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
