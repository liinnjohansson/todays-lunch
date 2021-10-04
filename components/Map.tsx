import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { mapStyle } from "../data/mapStyle";
import { BistroData } from "../data/bistroData";
import { BistroContext } from "../contexts/BistroContext";
import { useContext, useState } from "react";
import {
View, Image
} from "react-native";

export default function Map() {
  const [selectedId, setSelectedId] = useState<string>()
  const { storedBistros } = useContext(BistroContext);
  const marker = require('../images/icons/marker.png');
  const selectedMarker = require('../images/icons/pressed-bistro-marker.png')

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={styles.map}
        initialRegion={{
          latitude: 57.7206788,
          longitude: 12.9414395,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        }}
      >
        {storedBistros.map((bistro, i) => (
          <Marker
            key={bistro.id}
            coordinate={{
              latitude: bistro.address.latitude,
              longitude: bistro.address.longitude,
            }}
            title={bistro.title}
            description={bistro.address.streetAddress}
            onPress={() => setSelectedId(bistro.id)}
          > 
          <Image source={selectedId === bistro.id ? selectedMarker : marker}
          />             
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }
});
