import * as React from "react";
import { Button, FlatList, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { BistroContext } from "../contexts/BistroContext";
import { useContext } from "react";
import BistroCard from "../components/BistroCard";
import WeekdaySlider from "../components/WeekdaySlider";
import { BistroStackScreenProps } from "../navigation/BistroStackNavigator";
import { CompositeScreenProps } from "@react-navigation/native";
import { TabScreenProps } from "../navigation/TabBistroMapNavigator";
import { RootStackScreenProps } from "../navigation/RootStackNavigator";

type Props = CompositeScreenProps<
  TabScreenProps<"Bistro">,
  RootStackScreenProps
>;

export default function BistroScreen({
  navigation,
}: BistroStackScreenProps<"Bistro">) {
  const { storedBistros } = useContext(BistroContext);
  return (
    <View style={styles.container}>
      <WeekdaySlider />
      {/* TODO: Skicka in Navigation till BistroCard - hur ? */}
      <FlatList
        data={storedBistros}
        renderItem={({ item }) => (
          <BistroCard bistro={item} weekday="wednesday" />
        )}
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
