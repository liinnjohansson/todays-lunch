import { CompositeScreenProps } from "@react-navigation/native";
import * as React from "react";
import Map from '../components/Map';
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { RootStackScreenProps } from "../navigation/RootStackNavigator";
import { TabScreenProps } from "../navigation/TabBistroMapNavigator";
import { BistroContext } from "../contexts/BistroContext";
import MapInfoBox from "../components/MapInfoBox";
import { useContext } from "react";

// CompositScreenProp används för att nvigera till vilken sida som helst från denna sida,
// Taben bahövs...för route.params inom denna fil
type Props = CompositeScreenProps<TabScreenProps<"Map">, RootStackScreenProps>;

export default function MapScreen({ navigation, route }: Props) {
const id = "1";
const { storedBistros } = useContext(BistroContext);
const selectedBistro = storedBistros.find((bistro) => bistro.id === id);

  return (
    <View style={styles.container}>
      {selectedBistro && <MapInfoBox bistro={selectedBistro} />}
          <Map/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});