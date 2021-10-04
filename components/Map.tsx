import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { mapStyle } from "../data/mapStyle";
import { BistroContext } from "../contexts/BistroContext";
import { useContext, useState } from "react";
import * as Location from 'expo-location';
import {
View, Image
} from "react-native";
import Permission from "./Permission";

export default function Map() {
  const [selectedId, setSelectedId] = useState<string>()
  const { storedBistros } = useContext(BistroContext);
  const marker = require('../images/icons/marker.png');
  const selectedMarker = require('../images/icons/pressed-bistro-marker.png')
  
  const [location, setLocation] = useState();
  const [errorMsg, setErrorMsg] = useState();

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
              <Permission/>
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
