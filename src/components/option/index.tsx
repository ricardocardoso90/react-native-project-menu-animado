import { styles } from "./styles";
import { Pressable, Text, View } from "react-native";

type OptionProps = {
  title: string;
};

export function Option({ title }: OptionProps) {
  return (
    <Pressable style={styles.container}>
      <Text>{title}</Text>
    </Pressable>
  )
};