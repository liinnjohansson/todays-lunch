import { CompositeScreenProps } from "@react-navigation/native";
import * as React from "react";
import { Button, Text, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { MapStackScreenProps } from "../navigation/MapStackNavigator";
import { RootStackScreenProps } from "../navigation/RootStackNavigator";
import { TabScreenProps } from "../navigation/TabBistroMapNavigator";

// CompositScreenProp används för att nvigera till vilken sida som helst från denna sida,
// Taben bahövs...för route.params inom denna fil
type Props = CompositeScreenProps<TabScreenProps<"Map">, RootStackScreenProps>;

export default function MapScreen({ navigation, route }: Props) {
  // TODO: In later issue: Check the navigation code weekday/weeknumer if used in function below for rendering right data
  // const weekday = route.params.weekday
  // const weekNumber = route.params.weekNumber

  return (
    <View style={styles.container}>
      <Text>Map Screen</Text>
      <Button
        title="Go to Menu"
        onPress={() =>
          navigation.navigate("Menu", {
            id: "1",
            title: "bistro namn",
            weekday: "friday",
            weekNumber: 12,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
