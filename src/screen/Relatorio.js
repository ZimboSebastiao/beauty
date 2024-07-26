import { View, Text, Pressable } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";

export default function Relatorio({ navigation }) {
  return (
    <SafeContainer>
      <View>
        <Text>Relatorio</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text>Login </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}
