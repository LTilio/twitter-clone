import React, { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import fotoPerfil1 from "../../Assets/cana.png";
import fotoPerfil2 from "../../Assets/torresgarcia1.jpg";
import fotoPerfil3 from "../../Assets/FLA_8196.png";
import fotoPerfil4 from "../../Assets/img2.jpeg";
import { styles } from "./style";

export function Home() {
  const [data, setData] = useState([]);

  const arrayMocado = [
    {
      id: 1,
      name: "fulado",
      email: "fulano@email.com",
      image: fotoPerfil2,
      conteudo: "Isso é um tweet",
    },
    {
      id: 2,
      name: "Ciclano",
      email: "ciclano@email.com",
      image: fotoPerfil1,
      conteudo: "Conteudo sobre flatList",
    },
    {
      id: 3,
      name: "Tilio",
      email: "Tilio@email.com",
      image: fotoPerfil3,
      conteudo: "burro?",
    },
    {
      id: 4,
      name: "Tilio",
      email: "Tilio@email.com",
      image: fotoPerfil3,
      conteudo: "Eu vou ler ATÉ ENTENDER!",
    },
    {
      id: 5,
      name: "sururu",
      email: "su@email.com",
      image: fotoPerfil4,
      conteudo: "miua Miua mia ron ron mia",
    },
  ];

  return (
    <FlatList
      data={arrayMocado}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.tweetContainer}>
          <Image
            source={item.image}
            alt="foto perfil"
            style={styles.profileImage}
          />
          <View style={styles.tweetContent}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
            <Text style={styles.content}>{item.conteudo}</Text>
            <View style={styles.iconContainer}>
              <Icon
                name="chatbubble-outline"
                size={20}
                color="gray"
                style={styles.icon}
              />
              <Icon
                name="repeat-outline"
                size={20}
                color="gray"
                style={styles.icon}
              />
              <Icon
                name="heart-outline"
                size={20}
                color="gray"
                style={styles.icon}
              />
              <Icon
                name="share-outline"
                size={20}
                color="gray"
                style={styles.icon}
              />
            </View>
          </View>
        </View>
      )}
    />
  );
}
