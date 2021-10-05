import React, { useContext } from "react";
import { IconButton } from "react-native-paper";
import { BistroContext } from "../contexts/BistroContext";
import { BistroData } from "../data/bistroData";

interface Props {
  bistro: BistroData;
}

const LikeButton = ({ bistro }: Props) => {
  const { likedBistros, toggleLikedBistros } = useContext(BistroContext);

  return (
    <IconButton
      icon={likedBistros.includes(bistro) ? "heart" : "heart-outline"}
      color={"#F8607E"}
      size={27}
      onPress={() => toggleLikedBistros(bistro)}
    />
  );
};

export default LikeButton;
