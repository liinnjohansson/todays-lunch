import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Paragraph, Title } from "react-native-paper";
import { BistroData } from "../data/bistroData";
import LikeButton from "./LikeButton";
import { MapMode, TransportMode } from "./Map";

interface Props {
  bistro: BistroData;
  mapTransport: MapMode | undefined;
  onChangeTransport: (mode: TransportMode) => void;
}

export default function MapInfoBox({ bistro, onChangeTransport, mapTransport }: Props) {
  const close = () => console.log("stäng"); //TODO: Koppla
  const transport = (mode: TransportMode) => {
    onChangeTransport(mode);
  };
  return (
    <View style={styles.container}>
      <Card style={styles.box}>
        <Card.Actions style={styles.action}>
          {/* TODO: Vald transport blir svart, andra grå när klickad + updt. transport tid */}
          <MaterialIcons
            name="directions-car"
            size={26}
            color="#000"
            onPress={() => transport('DRIVING')}
          />
          <MaterialIcons
            name="directions-train"
            size={26}
            color="#000"
            onPress={() => transport('TRANSIT')}
          />
          <MaterialIcons
            name="directions-walk"
            size={26}
            color="#000"
            onPress={() => transport('WALKING')}
          />
          <MaterialIcons
            name="directions-bike"
            size={26}
            color="#000"
            onPress={() => transport('BICYCLING')}
          />
        </Card.Actions>
        <Card.Content style={styles.content}>
          <View style={styles.contentChild}>
            <View style={styles.distance}>
              <Title style={styles.text}>{bistro.title}</Title>
              <LikeButton bistro={bistro} />
            </View>
            <View style={styles.distance}>
              {mapTransport && <Paragraph style={[styles.text, styles.time]}>{mapTransport.duration.toFixed()} min </Paragraph>}
              {mapTransport && <Paragraph style={styles.text}>({mapTransport.distance.toFixed(2)} km)</Paragraph>}
            </View>
          </View>
          {/* <TouchableOpacity onPress={close} style={styles.contentChild}>
            <MaterialIcons name="close" size={30} color="#fff" />
          </TouchableOpacity> */}
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
});
