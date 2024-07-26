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

export default function Perfil({ navigation }) {
  return (
    <SafeContainer>
      <View style={estilos.cabecalho}>
        <ChevronLeft color="#ffff" size={32} />
        <Text style={estilos.textoCabecalho}> MEUS DADOS</Text>
        <CircleUserRound color="#ffff" size={32} />
      </View>

      <View style={estilos.form}>
        <View>
          <Text style={estilos.label}>Nome Completo</Text>
          <TextInput
            editable={false}
            style={estilos.input}
            left={(props) => <Mail {...props} />}
          />

          <Text style={estilos.label}>E-mail</Text>
          <TextInput editable={false} style={estilos.input} />

          <Text style={estilos.label}>Contato</Text>
          <TextInput editable={false} style={estilos.input} />

          <View>
            <View style={estilos.botoes}>
              <Pressable
                style={estilos.botao}
                onPress={() =>
                  navigation.navigate("HomeScreen", { screen: "Home" })
                }
              >
                <UserRoundPen color="#ffff" />
                <Text style={estilos.textoBotao}>EDITAR</Text>
              </Pressable>
            </View>
            <View style={estilos.botoes}>
              <Pressable
                style={estilos.deletar}
                onPress={() =>
                  navigation.navigate("HomeScreen", { screen: "Home" })
                }
              >
                <Trash2 color="#ffff" />
                <Text style={estilos.textoBotao}>DELETAR</Text>
              </Pressable>
            </View>
            <View style={estilos.botoes}>
              <Pressable
                style={estilos.sair}
                onPress={() =>
                  navigation.navigate("HomeScreen", { screen: "Home" })
                }
              >
                <LogOut color="#223f4d" />
                {""}
                <Text style={estilos.textoBotaoSair}>SAIR</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  cabecalho: {
    backgroundColor: "#223f4d",
    width: "100%",
    padding: 12,
    paddingTop: 30,
    paddingBottom: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textoCabecalho: {
    color: "#ffff",
    fontSize: 14,
  },
  viewCartao: {
    marginTop: 50,
  },
  cartao: {
    marginVertical: 10,
    width: "80%",
    margin: 10,
  },
  cartaoFormata: {
    // backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 30,
  },
  imagem: {
    borderRadius: 20,
  },
  texto: {
    padding: 20,
    color: "#577672",
    fontWeight: "bold",
    fontSize: 18,
  },

  form: {
    width: "100%",
    padding: 20,
    paddingTop: 20,
    marginTop: 0,
  },
  label: {
    color: "#fa967a",
    fontSize: 17,
    fontWeight: "bold",
    padding: 10,
  },
  input: {
    backgroundColor: "#F9F9F9",
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    elevation: 3,
    borderColor: "white",
  },
  botoes: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginTop: 15,
  },
  botao: {
    backgroundColor: "#ffa187",
    padding: 12,
    width: "40%",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  deletar: {
    backgroundColor: "#eb1520",
    padding: 12,
    width: "40%",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  sair: {
    backgroundColor: "rbg(0, 0, 0, 0.4)",
    padding: 12,
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
  },
  textoBotao: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  textoBotaoSair: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#223f4d",
  },
});
