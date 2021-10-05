import { Entypo, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Paragraph, Title } from "react-native-paper";
import { BistroData } from "../data/bistroData";
import LikeButton from "./LikeButton";

interface Props {
  id: string;
  bistro?: BistroData;
}

export default function MapContentBox({ bistro }: Props) {
  const close = () => console.log("stäng"); //Radera när fungerar
  const transport = () => console.log("val av transport"); //Radera när fungerar
  return (
    <View style={styles.container}>
      <Card style={styles.box}>
        <Card.Actions style={styles.action}>
          {/* TODO: Gör ikon till knapp */}
          <MaterialIcons
            name="directions-car"
            size={26}
            color="#000"
            style={styles.icon}
            onPress={transport}
          />
          <MaterialIcons
            name="directions-train"
            size={26}
            color="#000"
            style={styles.icon}
            onPress={transport}
          />
          <MaterialIcons
            name="directions-walk"
            size={26}
            color="#000"
            style={styles.icon}
            onPress={transport}
          />
          <MaterialIcons
            name="directions-bike"
            size={26}
            color="#000"
            style={styles.icon}
            onPress={transport}
          />
        </Card.Actions>
        <Card.Content style={styles.content}>
          <View>
            <View style={styles.distanceContainer}>
              <Title style={styles.text}>Bistro titel</Title>
              {bistro && <LikeButton bistro={bistro} />}
            </View>
            <View style={styles.distanceContainer}>
              <Paragraph style={[styles.text, styles.time]}>15min </Paragraph>
              <Paragraph style={styles.text}>(2,2km)</Paragraph>
            </View>
          </View>
          <MaterialIcons
            name="close"
            size={30}
            color="#fff"
            style={styles.icon}
            onPress={close}
          />
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
    paddingTop: 8,
  },
  action: {
    // paddingTop: 0,
    marginTop: 0,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
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
});
