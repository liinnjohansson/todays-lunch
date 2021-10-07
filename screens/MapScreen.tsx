import { CompositeScreenProps } from "@react-navigation/native";
import * as React from "react";
import Map, { TransportMode } from "../components/Map";
import { StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { RootStackScreenProps } from "../navigation/RootStackNavigator";
import { TabScreenProps } from "../navigation/TabBistroMapNavigator";
import MapInfoBox from "../components/MapInfoBox";
import { BistroContext } from "../contexts/BistroContext";
import { useContext, useState } from "react";
import { BistroData } from "../data/bistroData";
import { MapMode } from "../components/Map"


type Props = CompositeScreenProps<TabScreenProps<"Map">, RootStackScreenProps>;

export default function MapScreen({ navigation, route }: Props) {
  const [id, setId] = useState<string>("");
  const [mode, setMode] = useState<TransportMode>("WALKING"); // ska sättas av MapInfoBox
  const [mapMode, setMapMode] = useState<MapMode>();
  const { storedBistros } = useContext(BistroContext);
  const selectedBistro = storedBistros.find((bistro) => bistro.id === id);

  const changeBistro = (bistro: BistroData) => {
    setId(bistro.id);
    console.log("chengeBistro");
  };
  const changeMode = (transportMode: TransportMode) => {
    setMode(transportMode);
    console.log("changeMode")
  };

  const changeTimeResult = (result: MapMode) => {
    setMapMode(result);
    console.log("changeTimeResult");
  }

  return (
    <View style={styles.container}>
      <View>
      <Map onChangeBistro={changeBistro} onChangeMode={changeTimeResult} transportMode={mode}/>
      </View>
      {selectedBistro && <MapInfoBox bistro={selectedBistro} mapTransport={mapMode} onChangeTransport={changeMode}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});