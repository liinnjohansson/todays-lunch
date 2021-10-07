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
  let currentWeekNumber = require("current-week-number");
  const { openBistros, updateStateOpenBistros } = useContext(BistroContext);
  const [weekInfo, setWeekInfo] = React.useState<WeekInfo>({
    weekday: "tuesday",
    weekNumber: currentWeekNumber(),
  });

  React.useEffect(() => {
    updateStateOpenBistros(weekInfo);
  }, []);

  const actionChange = (data: WeekInfo) => {
    updateStateOpenBistros(data);
    setWeekInfo(data);
  };

  return (
    <View style={styles.container}>
      <WeekdaySlider onChange={actionChange} />
      <FlatList
        data={openBistros}
        renderItem={({ item }) => (
          <TouchableRipple
            onPress={() =>
              navigation.navigate("Menu", {
                id: item.id,
                title: item.title,
                weekday: weekInfo.weekday,
                weekNumber: weekInfo.weekNumber,
              })
            }
          >
            <BistroCard
              bistro={item}
              weekday={weekInfo.weekday}
              weekNumber={weekInfo.weekNumber}
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
