import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BistroProvider from "./contexts/BistroContext";
import AnimatedSplashScreen from "./screens/SplashScreen";
import Navigation from "./navigation/Navigation";
import MapProvider from "./contexts/MapContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <BistroProvider>
        <MapProvider>
          <AnimatedSplashScreen>
            <Navigation />
          </AnimatedSplashScreen>
          <StatusBar />
        </MapProvider>
      </BistroProvider>
    </SafeAreaProvider>
  );
}
