import { NavigatorScreenParams, ParamListBase } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import * as React from "react";
import { useTheme } from "react-native-paper";
import MenuScreen from "../screens/MenuScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabBistroMapNavigator, { TabParamList } from "./TabBistroMapNavigator";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export interface RootStackParamList extends ParamListBase {
  Root: NavigatorScreenParams<TabParamList> | undefined;
  Menu: {
    title: string;
    id: string;
    weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
    weekNumber: number;
  };
  NotFound: undefined;
}

export type RootStackScreenProps<
  Screen extends keyof RootStackParamList = string
> = NativeStackScreenProps<RootStackParamList, Screen>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.text,
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#723A45" },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Root"
        component={TabBistroMapNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ title: "Meny" }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
