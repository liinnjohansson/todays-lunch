import { Entypo } from "@expo/vector-icons";
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
  return (
    <View style={styles.container}>
      <Card style={styles.box}>
        <Card.Actions>
          {/* TODO: Behöver kunna navigera till Bistro, istället för logg. */}
          <Entypo
            name="cross"
            size={30}
            color="#fff"
            style={styles.icon}
            onPress={close}
          />
        </Card.Actions>
        <Card.Content>
          <View style={styles.distanceContainer}>
            <Title style={styles.text}>{bistro?.title}</Title>
            {bistro && <LikeButton bistro={bistro} />}
          </View>
          <View style={styles.distanceContainer}>
            <Paragraph style={[styles.text, styles.time]}>15min </Paragraph>
            <Paragraph style={styles.text}>(2,2km)</Paragraph>
          </View>
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
});
