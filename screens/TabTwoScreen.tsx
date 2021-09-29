import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View>
      <MapView style={styles.map} 
      initialRegion={{
        latitude: 57.7206788,
        longitude: 12.9414395,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
