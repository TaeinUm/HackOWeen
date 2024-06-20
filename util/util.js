import {Dimensions} from "react-native";


export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export function timestampTo12HourFormat(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour hours to 12-hour format
  const hours12 = hours % 12 || 12;

  // Add leading zero to minutes if needed
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours12}:${formattedMinutes} ${amOrPm}`;
}
