import { Platform } from "react-native";
import * as Linking from "expo-linking"
import { BistroData } from "../data/bistroData";

interface Props {
  bistro: BistroData;
}

function PhoneDialer({ bistro }: Props) {
  let phoneNumber = "";
  const bistroPhoneNumber = bistro.address.phone.toString();

  if (Platform.OS === "android") {
    phoneNumber = `tel:${bistroPhoneNumber}`;
  } else {
    phoneNumber = `telprompt:${bistroPhoneNumber}`;
  }

  Linking.openURL(phoneNumber);
}

export { PhoneDialer };