import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login } from "../Pages/Login";
import { BottomTabsRoutes } from "./BottomTabsRoutes";

export type RootStackParamsList = {
  StackLogin: { name: string };
  StackHome: { name: string };
};

const StackRoute = createNativeStackNavigator<RootStackParamsList>();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <StackRoute.Navigator screenOptions={{ headerShown: false }}>
        <StackRoute.Screen name="StackLogin" component={Login} />
        <StackRoute.Screen name="StackHome" component={BottomTabsRoutes} />
      </StackRoute.Navigator>
    </NavigationContainer>
  );
}
