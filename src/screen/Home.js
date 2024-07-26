import { View, Text, Pressable } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";

export default function Home({ navigation }) {
  return (
    <SafeContainer>
      <View>
        <Text>Home</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text>Login </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}
