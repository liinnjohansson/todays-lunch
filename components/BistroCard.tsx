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
import OfferTag from "./OfferTag";
import LikeButton from "./LikeButton";

interface Props {
  bistro: BistroData;
  weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday";
  weekNumber: number;
}

const BistroCard = ({ bistro, weekday, weekNumber }: Props) => {
  const image = { uri: `${bistro.imageUrl}` };
  const title = bistro.title;
  let lunchStart: String | undefined;
  let lunchEnd: String | undefined;
  let priceFrom: Number | undefined;

  const lunchOfTheWeekOffer = bistro.lunchOfTheWeekOffer?.find(
    (lunch) => lunch.weekNumber == weekNumber
  );
  if (lunchOfTheWeekOffer) {
    lunchStart = lunchOfTheWeekOffer[weekday]?.lunchStart.toFixed(2);
    lunchEnd = lunchOfTheWeekOffer[weekday]?.lunchEnd?.toFixed(2);
    priceFrom = lunchOfTheWeekOffer[weekday]?.priceFrom;
  } else {
    lunchStart = bistro.lunchOfTheWeekDefault[weekday]?.lunchStart?.toFixed(2);
    lunchEnd = bistro.lunchOfTheWeekDefault[weekday]?.lunchEnd?.toFixed(2);
    priceFrom = bistro.lunchOfTheWeekDefault[weekday]?.priceFrom;
  }

  const onPress = () => console.log("Nu klickade jag!");
  const onLongPress = () => console.log("Nuuu klickade jag läääänge");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.tagsAndLikeContainer}>
          <View style={styles.tags}>
            {bistro.lunchOfTheWeekDefault.tags.coffeeIncluded ? (
              <OfferTag displayText="Kaffe ingår" />
            ) : null}
            {bistro.lunchOfTheWeekDefault.tags.saladBuffet ? (
              <OfferTag displayText="Salladsbuffé" />
            ) : null}
            {bistro.lunchOfTheWeekDefault.tags.outdoorSeating ? (
              <OfferTag displayText="Uteservering" />
            ) : null}
          </View>
          <View style={styles.likeButton}>
            <LikeButton bistro={bistro} />
          </View>
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
  tagsAndLikeContainer: {
    flex: 1,
    flexDirection: "row",
  },
  likeButton: {
    flex: 1,
    alignItems: "flex-end",
  },
  tags: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 20,
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
