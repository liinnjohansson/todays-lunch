import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { mapStyle } from "../data/mapStyle";
import { BistroContext } from "../contexts/BistroContext";
import { useContext, useState } from "react";
import { Image } from "react-native";
import { MapContext } from "../contexts/MapContext";
import MapViewDirections from "react-native-maps-directions";
import { BistroData } from "../data/bistroData";

export type TransportMode = "DRIVING" | "BICYCLING" | "WALKING" | "TRANSIT";
export interface MapMode {
  distance: number;
  duration: number;
}
interface Props {
  onChangeBistro: (bistro: BistroData) => void;
  onChangeMode: (mode: MapMode) => void;
  transportMode: TransportMode;
}

const Map = ({ onChangeBistro, onChangeMode, transportMode }: Props) => {
  const [selectedId, setSelectedId] = useState<string>();
  const { storedBistros } = useContext(BistroContext);
  const marker = require("../images/icons/marker.png");
  const selectedMarkerImage = require("../images/icons/pressed-bistro-marker.png");
  const { userLocation } = useContext(MapContext);
  const GOOGLE_MAPS_APIKEY = "AIzaSyBvSXOW7pC6kk7InV59oBFOCQ8WZiBUTz0";
  const [lat, setLat] = useState<number>();
  const [long, setLong] = useState<number>();

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      customMapStyle={mapStyle}
      style={styles.map}
      initialRegion={{
        latitude: userLocation?.latitude || 57.719723,
        longitude: userLocation?.longitude || 12.941051,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      }}
    >
      <MapViewDirections
        lineDashPattern={[0]}
        origin={{
          latitude: userLocation?.latitude || 57.719723,
          longitude: userLocation?.longitude || 12.941051,
        }}
        destination={{
          latitude: lat || 0,
          longitude: long || 0,
        }}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="#F8607E"
        mode={transportMode}
        onReady={(result) => {
          let mode: MapMode = {
            distance: result.distance,
            duration: result.duration,
          };
          onChangeMode(mode);
        }}
      />
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
            latitude: bistro.address.latitude || 57.7206788,
            longitude: bistro.address.longitude || 57.7206788,
          }}
          onPress={() => {
            {
              setSelectedId(bistro.id),
                setLat(bistro.address.latitude),
                setLong(bistro.address.longitude);
              onChangeBistro(bistro);
            }
          }}
        >
          <Image
            source={selectedId === bistro.id ? selectedMarkerImage : marker}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  image: {
    width: 50,
    height: 100,
  },
});
