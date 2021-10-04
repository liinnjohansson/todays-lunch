import { CompositeScreenProps } from "@react-navigation/native";
import * as React from "react";
import Map from '../components/Map';
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { RootStackScreenProps } from "../navigation/RootStackNavigator";
import { TabScreenProps } from "../navigation/TabBistroMapNavigator";

// CompositScreenProp används för att nvigera till vilken sida som helst från denna sida,
// Taben bahövs...för route.params inom denna fil
type Props = CompositeScreenProps<TabScreenProps<"Map">, RootStackScreenProps>;

export default function MapScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
          <Map/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
