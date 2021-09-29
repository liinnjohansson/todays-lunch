import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import BistroScreen from "../screens/BistroScreen";
import MenuScreen from "../screens/MenuScreen";

type BistroStackParamList = {
  Bistro: undefined;
  Menu: {id: number};
};

export type BistroStackScreenProps<Screen extends keyof BistroStackParamList> =
NativeStackScreenProps<BistroStackParamList, Screen>;

const Stack = createNativeStackNavigator<BistroStackParamList>();

export default function BistroStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bistro" component={BistroScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}