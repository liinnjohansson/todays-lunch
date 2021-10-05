import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import {
  Animated,
  StyleSheet,
  View,
} from "react-native";

SplashScreen.preventAutoHideAsync().catch(() => {
});

export default function AnimatedSplashScreen({ children }: any) {
  const animation = React.useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = React.useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = React.useState(
    false
  );

  React.useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 2200,
        useNativeDriver: false,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  async function loadResourcesAndDataAsync() {
    try {
      await SplashScreen.hideAsync();
      
      await Promise.all([]);
    } catch (e) {
      
    } finally {
      setAppReady(true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: Constants.manifest?.splash?.backgroundColor,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={require("../images/splash.png")}
            onLoadEnd={loadResourcesAndDataAsync}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}
