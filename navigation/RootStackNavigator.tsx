import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import MenuScreen from "../screens/MenuScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import TabBistroMapNavigator, { TabParamList } from "./TabBistroMapNavigator";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

type RootStackParamList = {
  Root: NavigatorScreenParams<TabParamList> | undefined;
  Menu: { title: string; id: string };
  NotFound: undefined;
};

//skapad för andra skärmar som vill veta vad
export type RootStackScreenProps = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={TabBistroMapNavigator}
        // options={{ headerShown: false }}
      />
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
