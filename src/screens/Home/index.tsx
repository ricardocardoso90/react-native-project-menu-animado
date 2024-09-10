import { useState } from "react";
import { styles } from "./styles";
import { Feather } from '@expo/vector-icons';
import { Pressable, View } from "react-native";
import { Option } from "../../components/option";

export function Home() {
  const [option, setOption] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton}>
          <Feather
            name="chevron-left"
            size={18}
          />
        </Pressable>

        <View style={styles.options}>
          <Option
            title="Home"
            icon="home"
            onPress={() => setOption("home")}
            isSelected={option === "home"}
          />
          <Option
            title="Documentos"
            icon="file-text"
            onPress={() => setOption("documentos")}
            isSelected={option === "documentos"}
          />
          <Option
            title="Notificações"
            icon="bell"
            onPress={() => setOption("notificações")}
            isSelected={option === "notificações"}
          />
        </View>
      </View>
    </View>
  )
};