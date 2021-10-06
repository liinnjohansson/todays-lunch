import * as React from "react";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from "@react-navigation/material-top-tabs";
import BistroScreen from "../screens/BistroScreen";
import MapScreen from "../screens/MapScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import BistroStackNavigator from "./BistroStackNavigator";
import MapStackNavigator from "./MapStackNavigator";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { View } from "react-native";

export type TabParamList = {
  BistroTab: undefined;
  MapTab: undefined;
};

export type TabScreenProps<Screen extends keyof TabParamList> =
  MaterialTopTabScreenProps<TabParamList, Screen>;
export type TabAllScreenProps = MaterialTopTabScreenProps<TabParamList>;

const Tab = createMaterialTopTabNavigator<TabParamList>();

export default function TabBistroMapNavigator() {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      style={{ paddingTop: insets.top, backgroundColor: "#723A45" }}
      initialRouteName="BistroTab"
      // tabBar={() => null}
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route);
        console.log(routeName, routeName !== "Menu");
        return {
          tabBarActiveTintColor: colors.text,
          tabBarStyle: { backgroundColor: "#723A45" },
          // tabBarShowLabel: routeName !== "Menu",
        };
      }}
    >
      <Tab.Screen
        name="BistroTab"
        component={BistroStackNavigator}
        options={{
          title: "Restauranger",
        }}
      />
      <Tab.Screen
        name="MapTab"
        component={MapStackNavigator}
        options={{
          title: "Karta",
        }}
      />
    </Tab.Navigator>
  );
}
