import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { mapStyle } from "../data/mapStyle";
import { BistroContext } from "../contexts/BistroContext";
import { useContext, useEffect, useState } from "react";
import * as Location from 'expo-location';
import {
View, Image
} from "react-native";

interface GeoLocation {
  longitude: number,
  latitude: number,
}

export default function Map() {
  const [selectedId, setSelectedId] = useState<string>()
  const { storedBistros } = useContext(BistroContext);
  const marker = require('../images/icons/marker.png');
  const selectedMarkerImage = require('../images/icons/pressed-bistro-marker.png')
  const [userLocation, setUserLocation] = useState<GeoLocation>();
  const [errorMsg, setErrorMsg] = useState<string>();  

    useEffect(() => {
        (async () => {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Low});
          setUserLocation(location.coords);
          location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High});
          setUserLocation(location.coords);
        })();
      }, []);

  return (
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
             }}>
               <Image
               style={styles.image}
               source={require('../images/icons/cat.png')}    /> 
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
            onPress={() =>  
              setSelectedId(bistro.id)
            }
          > 
          <Image source={selectedId === bistro.id ? selectedMarkerImage : marker}
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
  },
  image: {
    width: 50,
    height: 100
  }
});
