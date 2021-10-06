import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BistroProvider from './contexts/BistroContext';
import useColorScheme from './hooks/useColorScheme';
import AnimatedSplashScreen from './screens/SplashScreen';
import Navigation from './navigation/Navigation';
import MapProvider from './contexts/MapContext';


export default function App() {
  const colorScheme = useColorScheme();

    return (
      <SafeAreaProvider>
        <BistroProvider>
          <MapProvider>
        <AnimatedSplashScreen>
        <Navigation colorScheme={colorScheme} />
        </AnimatedSplashScreen>
        <StatusBar />
        </MapProvider>
      </BistroProvider>
      </SafeAreaProvider>
    );
  }