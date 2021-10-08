import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BistroData } from "../data/bistroData";

interface Props {
  bistro: BistroData;
  weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
  weekNumber: number;
}

export default function MenuSheet({ bistro, weekday, weekNumber }: Props) {
  const title = bistro.title;
  let dishes: string[] | undefined;
  let lunchStart: String | undefined;
  let lunchEnd: String | undefined;
  let priceFrom: Number | undefined;

  const lunchOfTheWeekOffer = bistro.lunchOfTheWeekOffer?.find(
    (lunch) => lunch.weekNumber == weekNumber
  );
  if (lunchOfTheWeekOffer) {
    dishes = lunchOfTheWeekOffer[weekday]?.dishes;
    lunchStart = lunchOfTheWeekOffer[weekday]?.lunchStart.toFixed(2);
    lunchEnd = lunchOfTheWeekOffer[weekday]?.lunchEnd?.toFixed(2);
    priceFrom = lunchOfTheWeekOffer[weekday]?.priceFrom;
  } else {
    dishes = bistro.lunchOfTheWeekDefault[weekday]?.dishes;
    lunchStart = bistro.lunchOfTheWeekDefault[weekday]?.lunchStart?.toFixed(2);
    lunchEnd = bistro.lunchOfTheWeekDefault[weekday]?.lunchEnd?.toFixed(2);
    priceFrom = bistro.lunchOfTheWeekDefault[weekday]?.priceFrom;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View>
          <Text style={[styles.font, styles.bistro]}>{title}</Text>
          <Text style={[styles.font, styles.timeAndPrice]}>
            Serveras mellan: {lunchStart} - {lunchEnd}
          </Text>
          {dishes &&
            dishes.map((dish, index) => {
              return (
                <Text style={[styles.font, styles.course]} key={index}>
                  {dish}
                </Text>
              );
            })}
        </View>
        <View>
          <Text style={[styles.font, styles.timeAndPrice]}>
            Från {priceFrom}:-
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  contentContainer: {
    backgroundColor: "#fff",
    width: 320,
    opacity: 0.95,
    padding: 20,
    justifyContent: "space-between",
  },
  font: {
    color: "#000",
  },
  bistro: {
    fontWeight: "bold",
    fontSize: 23,
    paddingTop: 2,
  },
  timeAndPrice: {
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 5,
  },
  course: {
    fontSize: 11,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
