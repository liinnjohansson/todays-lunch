import * as React from "react";
import { useContext } from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { BistroContext } from "../contexts/BistroContext";
import { RootTabScreenProps } from "../types";

export default function MenuScreen( id: string, { navigation }: RootTabScreenProps<"Menu">) {
  const { storedBistros } = useContext(BistroContext);
  const selectedBistro = storedBistros.find((bistro) => bistro.id === "1"); //Hårdkodat (The Company), skrivs om när vi vet hur id kan skickas in som parameter

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../images/sandwalls-plats.jpg")}
      >
        <ScrollView style={styles.menuSheet}>
          <Text style={[styles.font, styles.bistro]}>
            {selectedBistro?.title}
          </Text>
          <Text style={[styles.font, styles.timeAndPrice]}>
            Serveras mellan:{" "}
            {selectedBistro?.lunchOfTheWeekDefault.monday?.lunchStart.toFixed(2)}
            {" "}-{" "}
            {selectedBistro?.lunchOfTheWeekDefault.monday?.lunchEnd.toFixed(2)}
          </Text>
          {selectedBistro?.lunchOfTheWeekDefault.monday?.dishes.map(
            (dish, index) => {
              return (
                <Text style={[styles.font, styles.course]} key={index}>
                  {dish}
                </Text>
              );
            }
          )}
          <Text style={[styles.font, styles.timeAndPrice]}>
            {selectedBistro?.lunchOfTheWeekDefault.monday?.priceFrom}:-
          </Text>
        </ScrollView>
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
  menuSheet: {
    backgroundColor: "#fff",
    width: 309,
    maxHeight: 427,
    color: "#000",
    opacity: 0.95,
    padding: 20,
  },
  font: {
    color: "#000",
    fontFamily: "Roboto",
  },
  bistro: {
    fontWeight: "bold",
    fontSize: 23,
    paddingTop: 2,
  },
  timeAndPrice: {
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 5,
  },
  course: {
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
