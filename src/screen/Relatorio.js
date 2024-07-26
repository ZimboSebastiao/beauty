import { View, StyleSheet, TextInput, Pressable } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";

import { Avatar, Button, Card, Text } from "react-native-paper";
import {
  CircleUserRound,
  ChevronLeft,
  UserRoundPen,
  Trash2,
  LogOut,
} from "lucide-react-native";

export default function Relatorio({ navigation }) {
  return (
    <SafeContainer>
      <View style={estilos.cabecalho}>
        <ChevronLeft color="#ffff" size={32} />
        <Text style={estilos.textoCabecalho}> FLUXO DE ENTRADA</Text>
        <Avatar.Text size={39} label="GS" />
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  cabecalho: {
    backgroundColor: "#f57856",
    width: "100%",
    padding: 10,
    paddingTop: 30,
    paddingBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textoCabecalho: {
    color: "#ffff",
    fontSize: 14,
  },
});
