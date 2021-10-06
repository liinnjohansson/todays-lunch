import { CompositeScreenProps } from "@react-navigation/native";
import * as React from "react";
import { Button, Text, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { RootStackAllScreenProps } from "../navigation/RootStackNavigator";
import { TabScreenProps } from "../navigation/TabBistroMapNavigator";

// CompositScreenProp används för att nvigera till vilken sida som helst från denna sida,
// Taben bahövs...för route.params inom denna fil
type Props = CompositeScreenProps<TabScreenProps<"MapTab">, RootStackAllScreenProps>;

export default function MapScreen({ navigation }: Props) {
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
