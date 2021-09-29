import * as React from "react";
import { useContext } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import MenuSheet from "../components/MenuSheet";
import { View } from "../components/Themed";
import { BistroContext } from "../contexts/BistroContext";
import { BistroData } from "../data/bistroData";
import BistroStackNavigator from "../navigation/BistroStackNavigator";
import { MapStackScreenProps } from "../navigation/MapStackNavigator";

export default function MenuScreen( bistro: BistroData, { navigation, route }: MapStackScreenProps<'Menu'>) {
  // TODO: Svara på navigation route.param.id och generera sida därifrån !!
    const id = '1';
    const { storedBistros } = useContext(BistroContext);
    const selectedBistro = storedBistros.find((bistro) => bistro.id === id);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../images/sandwalls-plats.jpg")}
      >
        <MenuSheet bistro={selectedBistro}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  }
});
