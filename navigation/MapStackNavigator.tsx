import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import MapScreen from "../screens/MapScreen";
import MenuScreen from "../screens/MenuScreen";

type MapStackParamList = {
  Map: undefined;
  Menu: { id: number };
};

type ScreenName = keyof MapStackParamList;

export type MapStackScreenProps<Screen extends ScreenName> =
  NativeStackScreenProps<MapStackParamList, Screen>;

const Stack = createNativeStackNavigator<MapStackParamList>();

export default function MapStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
    </Stack.Navigator>
  );
}
