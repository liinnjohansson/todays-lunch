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

  return (
    <Tab.Navigator
      style={{ paddingTop: insets.top, backgroundColor: "#723A45" }}
      initialRouteName="Bistro"
      screenOptions={{
        tabBarActiveTintColor: colors.text,
        tabBarStyle: { backgroundColor: "#723A45" },
      }}
    >
      <Tab.Screen
        name="Bistro"
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
