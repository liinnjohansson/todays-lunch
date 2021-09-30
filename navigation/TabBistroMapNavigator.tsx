import * as React from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
  MaterialTopTabScreenProps,
} from "@react-navigation/material-top-tabs";
import BistroScreen from "../screens/BistroScreen";
import MapScreen from "../screens/MapScreen";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import Navigation from "./Navigation";

export type TabParamList = {
  Bistro: undefined;
  Map: undefined;
};

export type TabScreenProps<Screen extends keyof TabParamList> =
  MaterialTopTabScreenProps<TabParamList, Screen>;

const Tab = createMaterialTopTabNavigator<TabParamList>();

export default function TabBistroMapNavigator() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator
      style={{ paddingTop: insets.top, backgroundColor: "#723A45" }}
      initialRouteName="Bistro"
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
