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

interface Props {
  bistro: BistroData;
  weekday: "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "";
}

//TODO: Lägg till prop för onPress som hanterar navigation i Screen sidan

const BistroCard = ({ bistro, weekday }: Props) => {
  const image = { uri: `${bistro.imageUrl}` };
  const title = bistro.title;
  let lunchStart: String | undefined;
  let lunchEnd: String | undefined;
  let priceFrom: Number | undefined;

  // TODO: Write code that check if weeknumer exist in the server thath correspond to requested week on app screen
  // Mock data for this case are written for bistro: The Company
  // This code maybe cut to its own file, and reused ?

  switch (weekday) {
    case "monday": {
      lunchStart = bistro.lunchOfTheWeekDefault.monday?.lunchStart?.toFixed(2);
      lunchEnd = bistro.lunchOfTheWeekDefault.monday?.lunchEnd?.toFixed(2);
      priceFrom = bistro.lunchOfTheWeekDefault.monday?.priceFrom;
    }
    case "tuesday": {
      lunchStart = bistro.lunchOfTheWeekDefault.tuesday?.lunchStart?.toFixed(2);
      lunchEnd = bistro.lunchOfTheWeekDefault.tuesday?.lunchEnd?.toFixed(2);
      priceFrom = bistro.lunchOfTheWeekDefault.tuesday?.priceFrom;
    }
    case "wednesday": {
      lunchStart =
        bistro.lunchOfTheWeekDefault.wednesday?.lunchStart?.toFixed(2);
      lunchEnd = bistro.lunchOfTheWeekDefault.wednesday?.lunchEnd?.toFixed(2);
      priceFrom = bistro.lunchOfTheWeekDefault.wednesday?.priceFrom;
    }
    case "thursday": {
      lunchStart =
        bistro.lunchOfTheWeekDefault.thursday?.lunchStart?.toFixed(2);
      lunchEnd = bistro.lunchOfTheWeekDefault.thursday?.lunchEnd?.toFixed(2);
      priceFrom = bistro.lunchOfTheWeekDefault.thursday?.priceFrom;
    }
    case "friday": {
      lunchStart = bistro.lunchOfTheWeekDefault.friday?.lunchStart?.toFixed(2);
      lunchEnd = bistro.lunchOfTheWeekDefault.friday?.lunchEnd?.toFixed(2);
      priceFrom = bistro.lunchOfTheWeekDefault.friday?.priceFrom;
    }
    case "": {
      // do nothing / or should just not be added on the app
    }
  }

  const onPress = () => console.log("Nu klickade jag!");
  const onLongPress = () => console.log("Nuuu klickade jag läääänge");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
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
