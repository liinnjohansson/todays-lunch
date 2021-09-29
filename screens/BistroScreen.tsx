import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {BistroContext} from "../contexts/BistroContext";
import { useContext } from 'react';
import BistroCard from '../components/BistroCard';
import WeekdaySlider from '../components/WeekdaySlider';

export default function BistroScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const { storedBistros } = useContext(BistroContext);
  return (
    <View style={styles.container}>
      <WeekdaySlider/>
      <FlatList
        data={storedBistros}
        renderItem={({item}) => <BistroCard bistro={item} weekday="wednesday"/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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