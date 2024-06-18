import React from "react";
import { TextInput } from "react-native";
import { styles } from "./style";

interface PropsComponent {
  placeHolder: string;
  value: string;
  onChangeValue: (value: string) => void;
  inputType?: boolean;
}

export function TextInputComponent({
  onChangeValue,
  placeHolder,
  value,
  inputType,
}: PropsComponent) {
  return (
    <TextInput
      placeholder={placeHolder}
      onChangeText={onChangeValue}
      value={value}
      style={styles.input}
      secureTextEntry={inputType}
    />
  );
}
