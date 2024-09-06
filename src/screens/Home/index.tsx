import { styles } from "./styles";
import { Pressable, StatusBar, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton}>
          <Feather
            name="chevron-left"
            size={18}
          />
        </Pressable>
      </View>
    </View>
  )
};