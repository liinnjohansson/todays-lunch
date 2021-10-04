import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BistroProvider from './contexts/BistroContext';
import useColorScheme from './hooks/useColorScheme';
import AnimatedSplashScreen from './screens/SplashScreen';
import Navigation from './navigation/Navigation';


export default function App() {
  const colorScheme = useColorScheme();

    return (
      <SafeAreaProvider>
        <BistroProvider>
        <AnimatedSplashScreen>
        <Navigation colorScheme={colorScheme} />
        </AnimatedSplashScreen>
        <StatusBar />
      </BistroProvider>
      </SafeAreaProvider>
    );
  }