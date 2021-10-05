import * as React from "react";
import { useContext } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import MenuInfoBox from "../components/MenuInfoBox";
import MenuSheet from "../components/MenuSheet";
import { View } from "../components/Themed";
import { BistroContext } from "../contexts/BistroContext";
import { RootStackScreenProps } from "../navigation/RootStackNavigator";

export default function MenuScreen({
  navigation,
  route,
}: RootStackScreenProps<"Menu">) {
  const id = route.params.id.toString();
  const { storedBistros } = useContext(BistroContext);
  const selectedBistro = storedBistros.find((bistro) => bistro.id === id);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../images/sandwalls-plats.jpg")}
      >
        <MenuSheet bistro={selectedBistro} />
        <MenuInfoBox bistro={selectedBistro} />
        <Button
          title={"gå till karta"}
          // onPress={() => navigation.navigate("Root", { screen: "Map" })}
          onPress={() => navigation.push("MenuMap")}
        />
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
    alignItems: "center",
    justifyContent: "center",
  },
});
