import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { BistroContext } from "../contexts/BistroContext";
import { useContext } from "react";
import BistroCard from "../components/BistroCard";
import WeekdaySlider from "../components/WeekdaySlider";
import { CompositeScreenProps } from "@react-navigation/native";
import { TabScreenProps } from "../navigation/TabBistroMapNavigator";
import { RootStackAllScreenProps } from "../navigation/RootStackNavigator";
import { TouchableRipple } from "react-native-paper";

type Props = CompositeScreenProps<
  TabScreenProps<"BistroTab">,
  RootStackAllScreenProps
>;

export default function BistroScreen({ navigation }: Props) {
  const { storedBistros } = useContext(BistroContext);

  const weekday = "monday";
  const weekNumber = 12;
  return (
    <View style={styles.container}>
      <WeekdaySlider />
      <FlatList
        data={storedBistros}
        renderItem={({ item }) => (
          <TouchableRipple
            onPress={() =>
              navigation.navigate("Menu", {
                id: item.id,
                title: item.title,
                weekday: weekday,
                weekNumber: weekNumber,
              })
            }
          >
            <BistroCard bistro={item} weekday={weekday} />
          </TouchableRipple>
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
