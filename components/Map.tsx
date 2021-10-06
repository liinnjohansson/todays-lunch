import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { mapStyle } from "../data/mapStyle";
import { BistroContext } from "../contexts/BistroContext";
import { useContext, useState } from "react";
import { View, Image } from "react-native";
import { MapContext } from "../contexts/MapContext";
import MapInfoBox from "./MapInfoBox";

function Map() {
  const [selectedId, setSelectedId] = useState<string>();
  const { storedBistros } = useContext(BistroContext);
  const marker = require("../images/icons/marker.png");
  const selectedMarkerImage = require("../images/icons/pressed-bistro-marker.png");
  const { userLocation } = useContext(MapContext);

  const id = "1";
  const selectedBistro = storedBistros.find((bistro) => bistro.id === id);

  return (
    <>
      <View style={styles.container}>
        {selectedBistro && <MapInfoBox bistro={selectedBistro} />}
      </View>
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
          style={styles.map}
          initialRegion={{
            latitude: userLocation?.latitude || 57.7206788,
            longitude: userLocation?.longitude || 57.7206788,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0021,
          }}
        >
          <Marker
            coordinate={{
              latitude: userLocation?.latitude || 57.7206788,
              longitude: userLocation?.longitude || 57.7206788,
            }}
          >
            <Image
              style={styles.image}
              source={require("../images/icons/cat.png")}
            />
          </Marker>
          {storedBistros.map((bistro) => (
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
              <Image
                source={selectedId === bistro.id ? selectedMarkerImage : marker}
              />
            </Marker>
          ))}
        </MapView>
      </View>
    </>
  );
}

export default Map;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  image: {
    width: 50,
    height: 100,
  },
});