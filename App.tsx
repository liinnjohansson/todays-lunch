import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BistroProvider from './contexts/BistroContext';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import AnimatedSplashScreen from './screens/SplashScreen';

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