import React from "react";
import { styles } from "./style";
import { Text, TouchableOpacity, View } from "react-native";

interface PropsComponent {
  title: string;
  handleOnChange: () => void;
}

export function ButtonComponent({ handleOnChange, title }: PropsComponent) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnChange} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
