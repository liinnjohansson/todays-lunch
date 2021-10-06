import { CompositeScreenProps } from "@react-navigation/native";
import * as React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import MenuInfoBox from "../components/MenuInfoBox";
import MenuSheet from "../components/MenuSheet";
import { View } from "../components/Themed";
import { BistroContext } from "../contexts/BistroContext";
import { RootStackScreenProps } from "../navigation/RootStackNavigator";

type Props = CompositeScreenProps<
  RootStackScreenProps<"Menu">,
  RootStackScreenProps
>;

export default function MenuScreen({ navigation, route }: Props) {
  const id = route.params.id.toString();
  const { storedBistros } = useContext(BistroContext);
  const selectedBistro = storedBistros.find((bistro) => bistro.id === id);

  useEffect(() => {
    if (!selectedBistro) navigation.navigate("NotFound");
  });

  if (!selectedBistro) return null;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../images/sandwalls-plats.jpg")}
      >
        <MenuSheet
          bistro={selectedBistro}
          weekday={route.params.weekday}
          weekNumber={route.params.weekNumber}
        />
        <MenuInfoBox bistro={selectedBistro} />
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
