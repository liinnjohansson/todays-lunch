import { NavigatorScreenParams, ParamListBase } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import * as React from "react";
import MenuScreen from "../screens/MenuScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabBistroMapNavigator, { TabParamList } from "./TabBistroMapNavigator";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// export type RootStackParamList = {
//   Root: NavigatorScreenParams<TabParamList> | undefined;
//   Menu: {
//     title: string;
//     id: string;
//     weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "";
//     weekNumber: number;
//   };
//   NotFound: undefined;
// };

//skapad för andra skärmar som vill veta vad
// export type RootStackScreenProps = NativeStackScreenProps<RootStackParamList>;

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

// Type declared fot other screens to know the type of RootStackParamList
export type RootStackScreenProps<
  Screen extends keyof RootStackParamList = string
> = NativeStackScreenProps<RootStackParamList, Screen>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={TabBistroMapNavigator} />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
