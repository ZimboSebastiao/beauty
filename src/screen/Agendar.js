import { View, Text, Pressable } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";

export default function Agendar({ navigation }) {
  return (
    <SafeContainer>
      <View>
        <Text>Agendamento</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text>Login </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}
