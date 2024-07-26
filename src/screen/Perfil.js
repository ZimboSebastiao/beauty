import { View, Text, Pressable } from "react-native";
import React from "react";

export default function Perfil({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text>Login </Text>
      </Pressable>
    </View>
  );
}
