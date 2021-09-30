import * as React from "react";
import { useContext } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import MenuSheet from "../components/MenuSheet";
import { View } from "../components/Themed";
import { BistroContext } from "../contexts/BistroContext";
import { BistroData } from "../data/bistroData";
import { MapStackScreenProps } from "../navigation/MapStackNavigator";

export default function MenuScreen({
  navigation,
  route,
}: MapStackScreenProps<"Menu">) {
  const id = route.params.id.toString();
  const { storedBistros } = useContext(BistroContext);
  const selectedBistro = storedBistros.find((bistro) => bistro.id === id);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../images/sandwalls-plats.jpg")}
      >
        {/* TODO: Om iget matchende id hittas, selectedBistro är null ? - vilken skärm / meddelande visas då ?*/}
        <MenuSheet bistro={selectedBistro} />
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
  },
});
