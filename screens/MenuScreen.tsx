import * as React from "react";
import { useContext } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import MenuInfoBox from "../components/MenuInfoBox";
import MenuSheet from "../components/MenuSheet";
import { View } from "../components/Themed";
import { BistroContext } from "../contexts/BistroContext";
import { BistroData } from "../data/bistroData";
import { RootTabScreenProps } from "../types";

export default function MenuScreen( bistro: BistroData, { navigation }: RootTabScreenProps<"Menu">) {
    const id = '1';
    const { storedBistros } = useContext(BistroContext);
    const selectedBistro = storedBistros.find((bistro) => bistro.id === id);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../images/sandwalls-plats-blur.png")}
      >
        <MenuSheet bistro={selectedBistro}/>
        <MenuInfoBox bistro={selectedBistro}/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  }
});
