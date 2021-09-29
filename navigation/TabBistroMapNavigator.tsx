import * as React from "react";
import { createMaterialTopTabNavigator, MaterialTopTabBarProps, MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import BistroScreen from '../screens/BistroScreen';
import MapScreen from '../screens/MapScreen';

export type TabParamList = {
  Bistro: undefined;
  Map: undefined; 
};

export type TabScreenProps<Screen extends keyof TabParamList> = MaterialTopTabScreenProps<TabParamList, Screen>

const Tab = createMaterialTopTabNavigator<TabParamList>();

export default function TabBistroMapNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Bistro"
        component={BistroScreen}
        options={{
          title: 'Restauranger'
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Karta'
        }}
      />
    </Tab.Navigator>
  )
}
