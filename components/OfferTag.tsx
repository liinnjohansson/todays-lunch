import React from "react";
import { Surface, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

interface Props {
  infoText: string;
}

const OfferTag = ({ infoText }: Props) => {
  return (
    <Surface style={styles.tag}>
      <Text style={styles.infoText}>{infoText}</Text>
    </Surface>
  );
};

export default OfferTag;

const styles = StyleSheet.create({
  tag: {
    marginBottom: 5,
    padding: 6,
    paddingLeft: 8,
    backgroundColor: "#723A45",
    maxWidth: 120,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    borderBottomEndRadius: 2,
    borderTopEndRadius: 2,
  },
  infoText: {
    color: "#fff",
  },
});
