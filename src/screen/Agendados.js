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

export default function Agendados({ navigation }) {
  return (
    <SafeContainer>
      <View style={estilos.cabecalho}>
        <ChevronLeft color="#ffff" size={32} />
        <Text style={estilos.textoCabecalho}> AGENDADO</Text>
        <Avatar.Text size={39} label="GS" />
      </View>

      <View style={estilos.viewCartao}>
        <View style={estilos.cartao}>
          <Text style={estilos.texto}>HIDRATAÇÃO + ESCOVA</Text>
          <Text style={estilos.texto}>02/10/2024 ás 12:00</Text>
          <View style={estilos.viewBotao}>
            <Pressable style={estilos.botao}>
              <Text style={estilos.textoBotao}>DESMARCAR</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={estilos.viewCartao}>
        <View style={estilos.cartao}>
          <Text style={estilos.texto}>MANICURE E PEDICURE</Text>
          <Text style={estilos.texto}>28/09/2024 ás 16:30</Text>
          <View style={estilos.viewBotao}>
            <Pressable style={estilos.botao}>
              <Text style={estilos.textoBotao}>DESMARCAR</Text>
            </Pressable>
          </View>
        </View>
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
    marginBottom: 30,
  },
  textoCabecalho: {
    color: "#ffff",
    fontSize: 14,
  },
  viewCartao: {
    padding: 13,
    // marginVertical: 15,
    width: "100%",
  },
  cartao: {
    backgroundColor: "#ffff",
    padding: 13,

    borderColor: "#ffff",
    elevation: 3,
    borderRadius: 20,
  },
  texto: {
    fontSize: 16,
    color: "#fa967a",
  },
  viewBotao: {
    paddingTop: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  botao: {
    backgroundColor: "#fa967a",
    width: "50%",
    padding: 6,
    borderRadius: 10,
  },
  textoBotao: {
    color: "#ffff",
    textAlign: "center",
  },
});
