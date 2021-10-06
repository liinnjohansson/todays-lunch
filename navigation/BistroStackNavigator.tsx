import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import BistroScreen from "../screens/BistroScreen";
import MenuScreen from "../screens/MenuScreen";

type BistroStackParamList = {
  Bistro: undefined;
  Menu: { id: number };
};

type ScreenName = keyof BistroStackParamList;

export type BistroStackScreenProps<Screen extends ScreenName> =
  NativeStackScreenProps<BistroStackParamList, Screen>;

const Stack = createNativeStackNavigator<BistroStackParamList>();

export default function BistroStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bistro"
        component={BistroScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
