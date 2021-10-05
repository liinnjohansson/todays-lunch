import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { RootStackScreenProps } from "../navigation/RootStackNavigator";

export default function NotFoundScreen({ navigation }: RootStackScreenProps<"NotFound">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Oops! Restaurangen du söker är inte registrerad hos oss.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Root")}
        style={styles.link}
      >
        <Text style={styles.linkText}>Gå tillbaka till startsidan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#723A45",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#fff",
    textDecorationLine: "underline",
  },
});
