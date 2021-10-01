import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Paragraph } from "react-native-paper";
import { BistroData } from "../data/bistroData";
import { PhoneDialer } from "./PhoneDialer";

interface Props {
  bistro: BistroData;
}

export default function MenuInfoBox({ bistro }: Props) {
  const map = () => console.log("Navigera till kartan"); //Radera när navigationen fungerar
  return (
    <View style={styles.container}>
      <Card style={styles.box}>
        <Card.Actions>
          {/* TODO: Behöver kunna navigera till kartan, istället för logg. */}
          <TouchableOpacity onPress={map}>
            <View style={styles.distanceContainer}>
              <FontAwesome
                name="map-marker"
                size={30}
                color="#fff"
                style={styles.icon}
              />
              {/* TODO: Behöver kunna hämta antalet minuter och avstånd från kartan */}
              <Paragraph style={[styles.text, styles.time]}>15min </Paragraph>
              <Paragraph style={styles.text}>(2,2km)</Paragraph>
            </View>
          </TouchableOpacity>
        </Card.Actions>
        <Card.Content>
          <Paragraph style={styles.text}>
            {bistro.address.streetAddress}, {bistro.address.zipCode}{" "}
            {bistro.address.city}
          </Paragraph>
          <TouchableOpacity onPress={() => PhoneDialer({ bistro })}>
            <Paragraph style={[styles.text, styles.phone]}>
              {bistro.address.phone}
            </Paragraph>
          </TouchableOpacity>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingLeft: 9,
    paddingTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    fontWeight: "bold",
  },
  icon: {
    paddingRight: 9,
  },
  phone: {
    textDecorationLine: "underline",
  },
});
