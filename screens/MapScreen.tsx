import { CompositeScreenProps } from "@react-navigation/native";
import * as React from "react";
import Map, { TransportMode } from "../components/Map";
import { StyleSheet, View } from "react-native";
import { RootStackScreenProps } from "../navigation/RootStackNavigator";
import { TabScreenProps } from "../navigation/TabBistroMapNavigator";
import MapInfoBox from "../components/MapInfoBox";
import { BistroContext } from "../contexts/BistroContext";
import { useContext, useState } from "react";
import { BistroData } from "../data/bistroData";
import { MapMode } from "../components/Map";

type Props = CompositeScreenProps<TabScreenProps<"Map">, RootStackScreenProps>;

export default function MapScreen({ navigation, route }: Props) {
  const [id, setId] = useState<string>("");
  const [mode, setMode] = useState<TransportMode>("WALKING");
  const [mapMode, setMapMode] = useState<MapMode>();
  const { storedBistros } = useContext(BistroContext);
  const selectedBistro = storedBistros.find((bistro) => bistro.id === id);

  return (
    <View style={styles.container}>
      <View>
        <Map
          onChangeBistro={(bistro: BistroData) => setId(bistro.id)}
          onChangeMode={setMapMode}
          transportMode={mode}
        />
      </View>
      {selectedBistro && (
        <MapInfoBox
          bistro={selectedBistro}
          mapTransport={mapMode}
          defaultTransport={mode}
          onChangeTransport={setMode}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
