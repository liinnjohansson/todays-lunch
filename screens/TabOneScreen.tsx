import * as React from 'react';
import { FlatList, ScrollView, StyleSheet } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {BistroContext} from "../contexts/BistroContext";
import { useContext } from 'react';
import BistroCard from '../components/BistroCard';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const { storedBistros } = useContext(BistroContext);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tab ooo Oneeeee</Text>
      <FlatList
        data={storedBistros}
        renderItem={({item}) => <BistroCard bistro={item} weekday="wednesday"/>}
      />
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
