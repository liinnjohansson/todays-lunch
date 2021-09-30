import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { mapStyle } from '../data/mapStyle';

export default function TabTwoScreen() {
  return (
    <View>
      <MapView style={styles.map} 
      initialRegion={{
        latitude: 57.7206788,
        longitude: 12.9414395,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
        
      }}
      provider={PROVIDER_GOOGLE}
      customMapStyle={mapStyle}/>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});