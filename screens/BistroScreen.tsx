import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { BistroContext, Weekday, WeekInfo } from "../contexts/BistroContext";
import { useContext } from "react";
import BistroCard from "../components/BistroCard";
import WeekdaySlider from "../components/WeekdaySlider";
import { CompositeScreenProps } from "@react-navigation/native";
import { TabScreenProps } from "../navigation/TabBistroMapNavigator";
import { RootStackScreenProps } from "../navigation/RootStackNavigator";
import { TouchableRipple } from "react-native-paper";

type Props = CompositeScreenProps<
  TabScreenProps<"Bistro">,
  RootStackScreenProps
>;

export default function BistroScreen({ navigation }: Props) {
  // const weekday = "monday"; // espresso house is "closed" on tuesday and Viskan on wednesday
  let currentWeekNumber = require("current-week-number");
  const [selectedDay, setSelectedDay] = React.useState<WeekInfo>({
    weekday: "monday",
    weekNumber: currentWeekNumber(),
  });
  // const weekNumber = currentWeekNumber(); //Do you want to test? v.40 is the number for The Company offer menu (closed on offerWeek Friday)

  const { openBistros, updateStateOpenBistros } = useContext(BistroContext);

  React.useEffect(() => {
    updateStateOpenBistros({
      weekday: selectedDay.weekday,
      weekNumber: selectedDay.weekNumber,
    });
  }, []);

  return (
    <View style={styles.container}>
      <WeekdaySlider onChange={(updateStateOpenBistros, setSelectedDay)} />
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
