import React from "react";
import { IconButton } from "react-native-paper";

const LikeButton = () => {
  return (
    <IconButton
      icon="heart-outline"
      color={"#F8607E"}
      size={27}
      //TODO: Toggle implementation for liking and unliking (icon-property should be "heart" when liked). 
      //Store choice in state (in Bistrocontext?)
      //by using likedBistro property for bistro object
      onPress={() => console.log("Gillade!")}
    />
  );
};

export default LikeButton;
