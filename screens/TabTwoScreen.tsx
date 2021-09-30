import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { View } from "../components/Themed";
//Provider_google måste finnas för att stödja ios enheter
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { mapStyle } from "../data/mapStyle";
import { BistroData } from "../data/bistroData";
import { BistroContext } from "../contexts/BistroContext";
import { useContext } from "react";

export default function TabTwoScreen(bistro: BistroData) {
  const { storedBistros } = useContext(BistroContext);

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={styles.map}
        region={{
          latitude: 57.7206788,
          longitude: 12.9414395,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        }}
      >
        {storedBistros.map((bistro) => (
          <Marker
            key={bistro.id}
            coordinate={{
              latitude: bistro.address.latitude,
              longitude: bistro.address.longitude,
            }}
            image={require('../images/icons/marker.png')}
          ></Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
