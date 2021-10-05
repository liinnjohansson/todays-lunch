import { Entypo, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacityBase, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Paragraph, Title } from "react-native-paper";
import { BistroData } from "../data/bistroData";
import LikeButton from "./LikeButton";

interface Props {
  id: string;
  bistro?: BistroData;
}

export default function MapContentBox({ bistro }: Props) {
  const close = () => console.log("stäng"); //TODO: Koppla
  const transport = () => console.log("val av transport"); //TODO: Koppla
  return (
    <View style={styles.container}>
      <Card style={styles.box}>
        <Card.Actions style={styles.action}>
          {/* TODO: Vald transport blir svart, andra grå när klickad + updt. transport tid */}
          <MaterialIcons
            name="directions-car"
            size={26}
            color="#000"
            onPress={transport}
          />
          <MaterialIcons
            name="directions-train"
            size={26}
            color="#000"
            onPress={transport}
          />
          <MaterialIcons
            name="directions-walk"
            size={26}
            color="#000"
            onPress={transport}
          />
          <MaterialIcons
            name="directions-bike"
            size={26}
            color="#000"
            onPress={transport}
          />
        </Card.Actions>
        <Card.Content style={styles.content}>
          <View style={styles.contentChild}>
            <View style={styles.distance}>
              <Title style={styles.text}>Bistro titel</Title>
              {bistro && <LikeButton bistro={bistro} />}
            </View>
            <View style={styles.distance}>
              <Paragraph style={[styles.text, styles.time]}>15min </Paragraph>
              <Paragraph style={styles.text}>(2,2km)</Paragraph>
            </View>
          </View>
          <TouchableOpacity onPress={close} style={styles.contentChild}>
            <MaterialIcons name="close" size={30} color="#fff" />
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
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentChild: {
    paddingRight: 9,
    paddingTop: 8,
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
