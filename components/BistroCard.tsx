import { CompositeScreenProps } from "@react-navigation/native";
import React from "react";
import {
  ImageBackground,
  PressableProps,
  StyleSheet,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, Title, Paragraph } from "react-native-paper";
import { BistroData } from "../data/bistroData";
import LikeButton from "./LikeButton";

interface Props {
  bistro: BistroData;
  weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
}

//TODO: Lägg till prop för onPress som hanterar navigation i Screen sidan

const BistroCard = ({ bistro, weekday }: Props) => {
  const image = { uri: `${bistro.imageUrl}` };
  const title = bistro.title;
  let lunchStart: String | undefined;
  let lunchEnd: String | undefined;
  let priceFrom: Number | undefined;

  const week = 20;

  // TODO: Write code that check if weeknumer exist in the server thath correspond to requested week on app screen
  // Mock data for this case are written for bistro: The Company
  // This code maybe cut to its own file, and reused ?

  const lunchOfTheWeek = bistro.lunchOfTheWeekOffer?.find(
    (lunch) => lunch.weekNumber == week
  );

  lunchStart = bistro.lunchOfTheWeekDefault[weekday]?.lunchStart?.toFixed(2);
  lunchEnd = bistro.lunchOfTheWeekDefault[weekday]?.lunchEnd?.toFixed(2);
  priceFrom = bistro.lunchOfTheWeekDefault[weekday]?.priceFrom;

  // skicka tillbaka ett lunch objekt

  const onPress = () => console.log("Nu klickade jag!");
  const onLongPress = () => console.log("Nuuu klickade jag läääänge");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.likeButton}>
          <LikeButton bistro={bistro} />
        </View>
        <Card style={styles.box}>
          <Card.Actions>
            <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
              <Title style={[styles.text, styles.title]}>{title}</Title>
            </TouchableOpacity>
          </Card.Actions>
          <Card.Content>
            <Paragraph style={styles.text}>
              Dagens lunch: från {priceFrom}:-
            </Paragraph>
            <Paragraph style={styles.text}>
              {lunchStart} - {lunchEnd}
            </Paragraph>
          </Card.Content>
        </Card>
      </ImageBackground>
    </View>
  );
};

export default BistroCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  likeButton: {
    flex: 1,
    alignItems: "flex-end",
  },
  box: {
    borderRadius: 0,
    backgroundColor: "#000000c0",
  },
  text: {
    color: "#fff",
  },
  title: {
    paddingLeft: 5,
    fontSize: 25,
  },
});
