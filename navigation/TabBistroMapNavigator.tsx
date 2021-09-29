import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import MapScreen from '../screens/MapScreen';
import BistroStackNavigator from './BistroStackNavigator';

const Tab = createMaterialTopTabNavigator();

export default function TabBistroMapNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Bistro"
        component={BistroStackNavigator}
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
