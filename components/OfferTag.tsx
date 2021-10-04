import React from "react";
import { Surface, Text } from "react-native-paper";
import { StyleSheet } from "react-native";

interface Props {
  displayText: string;
}

const OfferTag = ({ displayText }: Props) => {
  return (
    <Surface style={styles.tag}>
      <Text style={styles.displayText}>{displayText}</Text>
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
  displayText: {
    color: "#fff",
  },
});
