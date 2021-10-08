import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { BistroData } from "../data/bistroData";
import LikeButton from "./LikeButton";
import { TransportResult, TransportMode } from "./Map";

interface Props {
  bistro: BistroData;
  mapTransport: TransportResult | undefined;
  defaultTransport: TransportMode;
  onChangeTransport: (mode: TransportMode) => void;
}

export default function MapInfoBox({
  bistro,
  onChangeTransport,
  mapTransport,
  defaultTransport,
}: Props) {
  const pressedTransport = (mode: TransportMode) => {
    onChangeTransport(mode);
    setTransport(mode);
  };
  const [transport, setTransport] = useState<TransportMode>(defaultTransport);
  return (
    <View style={styles.container}>
      <Card style={styles.box}>
        <Card.Actions style={styles.action}>
          <MaterialIcons
            name="directions-car"
            size={26}
            color="#000"
            onPress={() => pressedTransport("DRIVING")}
            style={[
              styles.icone,
              transport === "DRIVING" ? styles.iconePressed : null,
            ]}
          />
          <MaterialIcons
            name="directions-train"
            size={26}
            color="#000"
            onPress={() => pressedTransport("TRANSIT")}
            style={[
              styles.icone,
              transport === "TRANSIT" ? styles.iconePressed : null,
            ]}
          />
          <MaterialIcons
            name="directions-walk"
            size={26}
            color="#000"
            onPress={() => pressedTransport("WALKING")}
            style={[
              styles.icone,
              transport === "WALKING" ? styles.iconePressed : null,
            ]}
          />
          <MaterialIcons
            name="directions-bike"
            size={26}
            color="#000"
            onPress={() => pressedTransport("BICYCLING")}
            style={[
              styles.icone,
              transport === "BICYCLING" ? styles.iconePressed : null,
            ]}
          />
        </Card.Actions>
        <Card.Content style={styles.content}>
          <View style={styles.contentChild}>
            <View style={styles.distance}>
              <Title style={styles.text}>{bistro.title}</Title>
              <LikeButton bistro={bistro} />
            </View>
            <View>
              <Paragraph style={styles.text}>
                {bistro.address.streetAddress}
              </Paragraph>
            </View>
            <View style={styles.distance}>
              {mapTransport && (
                <Paragraph style={[styles.text, styles.time]}>
                  {mapTransport.duration.toFixed()} min{" "}
                </Paragraph>
              )}
              {mapTransport && (
                <Paragraph style={styles.text}>
                  ({mapTransport.distance.toFixed(2)} km)
                </Paragraph>
              )}
            </View>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 0,
    backgroundColor: "#000000c0",
  },
  action: {
    marginTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 4,
  },
  contentChild: {
    paddingTop: 4,
  },
  distance: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  time: {
    fontWeight: "bold",
  },
  icone: {
    color: "gray",
    fontWeight: "normal",
  },
  iconePressed: {
    color: "black",
    fontWeight: "bold",
  },
});
