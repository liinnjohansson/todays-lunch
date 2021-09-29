import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Paragraph } from "react-native-paper";
import { BistroData } from "../data/bistroData";
import { PhoneDialer } from "./PhoneDialer";

interface Props {
  bistro?: BistroData;
}

export default function MenuInfoBox({ bistro }: Props) {
  const map = () => console.log("Navigera till kartan"); //TODO: Behöver kunna navigera till kartan, istället för logg.
  return (
    <View style={styles.container}>
      <Card style={styles.box}>
        <Card.Actions>
          <FontAwesome
            name="map-marker"
            size={30}
            color="#fff"
            style={styles.icon}
          />
          <TouchableOpacity onPress={map}>
            <Paragraph style={styles.distanceContainer}>
              <Paragraph style={[styles.text, styles.time]}>15min </Paragraph>
              <Paragraph style={styles.text}>(2,2km)</Paragraph>
            </Paragraph>
          </TouchableOpacity>
        </Card.Actions>
        <Card.Content>
          <Paragraph style={styles.text}>
            {bistro?.address.streetAddress}, {bistro?.address.zipCode}{" "}
            {bistro?.address.city}
          </Paragraph>
          <Paragraph onPress={() => PhoneDialer({bistro})} style={styles.text}>
            {bistro?.address.phone}
          </Paragraph>
          <Paragraph style={styles.text}>Rating?</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
    justifyContent: "flex-end",
  },
  box: {
    borderRadius: 0,
    backgroundColor: "#000000c0",
    paddingTop: 8,
  },
  text: {
    color: "#fff",
  },
  distanceContainer: {
    paddingLeft: 15,
  },
  time: {
    fontWeight: "bold",
  },
  icon: {
    paddingLeft: 9,
  },
});
