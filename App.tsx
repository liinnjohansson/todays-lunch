import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BistroProvider from './contexts/BistroContext';

// TODO: Fråga david om det är ok att ta bort detta bortkommenterade 
// import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import AnimatedAppLoader from './screens/SplashScreen';

export default function App() {
  // const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // if (!isLoadingComplete) {
  //   return null;
  // } else {
    return (
      <SafeAreaProvider>
        <BistroProvider>
        <AnimatedAppLoader>
        <Navigation colorScheme={colorScheme} />
        </AnimatedAppLoader>
        <StatusBar />
      </BistroProvider>
      </SafeAreaProvider>
    );
  }
// }
