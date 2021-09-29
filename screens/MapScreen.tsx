import * as React from "react";
import { Button, Text, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function MapScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text>Feed Screen</Text>
      {/* <Button
        title="Go to Menu for by id"
        onPress={() => navigation.navigate("Menu", { id: 1 })}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
