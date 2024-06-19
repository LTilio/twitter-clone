import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Home } from "../Pages/Home";
import fotoPerfil from "../Assets/cana.png";
import { Image, Text, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { Login } from "../Pages/Login";

export type RootTabsParamsList = {
  TabsHome: { name: string };
  TabsMessage: { name: string };
  TabsSearch: { name: string };
  TabsFav: { name: string };
};

const TabRoute = createBottomTabNavigator<RootTabsParamsList>();

export function BottomTabsRoutes() {
  return (
    <TabRoute.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60,
          padding: 15,
          justifyContent: "space-around",
        },
      }}
    >
      <TabRoute.Screen
        name="TabsHome"
        component={Home}
        options={{
          headerTitle: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={fotoPerfil}
                alt="foto perfil"
                style={{
                  width: 45,
                  height: 45,
                  marginRight: 10,
                  borderRadius: 50,
                }}
              />
              <Text
                style={{ fontSize: 20, marginLeft: 10, fontWeight: "bold" }}
              >
                Home
              </Text>
            </View>
          ),
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon name="home" size={25} color={"#a9a9a9"} />
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <TabRoute.Screen
        name="TabsSearch"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Icon name="search" size={25} color={"#a9a9a9"} />,
          headerTitle: () => (
            <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: "bold" }}>
              Search
            </Text>
          ),
        }}
      />
      <TabRoute.Screen
        name="TabsMessage"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Icon name="chatbubble-ellipses" size={25} color={"#a9a9a9"} />
          ),
          headerTitle: () => (
            <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: "bold" }}>
              Messages
            </Text>
          ),
          tabBarLabel: "",
        }}
      />
    </TabRoute.Navigator>
  );
}
