import * as React from "react";
import { View, StyleSheet } from "react-native";
import Map from '../components/Map';

export default function TabTwoScreen() {
  return(
  <View style={styles.container}>
    <Map/>
  </View>
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    }
 });

