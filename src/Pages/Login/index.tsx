import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TextInputComponent } from "../../Components/TextInputComponent";
import { ButtonComponent } from "../../Components/ButtonComponent";
import Icon from "@expo/vector-icons/Ionicons";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nav = useNavigation();

  const hadleUser = (value: string) => {
    setUser(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleLogin = () => {
    nav.navigate("StackHome", { name: "Home" });
  };

  const handleAviso = () => {
    Alert.alert("Cuidado com o urubu do pix!");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon
            name="logo-twitter"
            size={100}
            color={"#fff"}
            style={styles.icon}
          />
        </View>
        <TextInputComponent
          placeHolder="Informe seu email ou userName"
          onChangeValue={hadleUser}
          value={user}
        />
        <TextInputComponent
          placeHolder="Informe sua senha"
          onChangeValue={handlePassword}
          inputType={true}
          value={password}
        />
        <Text style={styles.text} onPress={handleAviso}>
          Forgot Password?
        </Text>
        <ButtonComponent title="Entrar" handleOnChange={handleLogin} />
        <Text style={styles.textSingUp}>
          New to twitter?{"  "}
          <Text style={styles.textSingUpColor} onPress={handleAviso}>
            Sing up now
          </Text>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
