import * as React from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from "@react-navigation/material-top-tabs";
import BistroScreen from "../screens/BistroScreen";
import MapScreen from "../screens/MapScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";

export type TabParamList = {
  // TODO: Check if parameters are right / working with the rest of the code !
  // This as now mens that to render the screen bistro/map you have to pas this parameters
  Bistro: {
    weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
    weekNumber: number;
  };
  Map: {
    weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
    weekNumber: number;
  };
};

export type TabScreenProps<Screen extends keyof TabParamList> =
  MaterialTopTabScreenProps<TabParamList, Screen>;

const Tab = createMaterialTopTabNavigator<TabParamList>();

export default function TabBistroMapNavigator() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const currentWeekNumber = require("current-week-number");
  const todayNumber = new Date();
  var weekday = new Array(4);
  weekday[0] = "monday";
  weekday[1] = "tuesday";
  weekday[2] = "wednesday";
  weekday[3] = "thursday";
  weekday[4] = "friday";
  const today = weekday[todayNumber.getDay() + 1];

  return (
    <Tab.Navigator
      style={{ paddingTop: insets.top, backgroundColor: "#723A45" }}
      // initialRouteName="Bistro"
      screenOptions={{
        tabBarActiveTintColor: colors.text,
        tabBarStyle: { backgroundColor: "#723A45" },
      }}
    >
      <Tab.Screen
        name="Bistro"
        // initialParams={{ weekday: today, weekNumber: currentWeekNumber }}
        component={BistroScreen}
        options={{
          title: "Restauranger",
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Karta",
        }}
      />
    </Tab.Navigator>
  );
}
