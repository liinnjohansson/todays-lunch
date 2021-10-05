import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { BistroContext, useBistro } from "../contexts/BistroContext";
import { useContext } from "react";
import BistroCard from "../components/BistroCard";
import WeekdaySlider from "../components/WeekdaySlider";
import { CompositeScreenProps } from "@react-navigation/native";
import { TabScreenProps } from "../navigation/TabBistroMapNavigator";
import { RootStackScreenProps } from "../navigation/RootStackNavigator";
import { TouchableRipple } from "react-native-paper";
import { BistroData } from "../data/bistroData";

type Props = CompositeScreenProps<
  TabScreenProps<"Bistro">,
  RootStackScreenProps
>;

export default function BistroScreen({ navigation }: Props) {
  // const { storedBistros } = useContext(BistroContext);  // OLD import of disply items
  const weekday = "monday";
  const weekNumber = 39; //the number for The Company offer menu
  // const { storedBistros, dispatch } = useBistro();
  const { openBistros, setOpenBistros } = useContext({
    weekday: weekday,
    weekNumber: weekNumber,
  });

  return (
    <View style={styles.container}>
      <WeekdaySlider />
      <FlatList
        data={openBistros}
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
            <BistroCard
              bistro={item}
              weekday={weekday}
              weekNumber={weekNumber}
            />
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
