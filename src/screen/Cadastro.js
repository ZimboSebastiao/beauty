import { View, StyleSheet, TextInput, Pressable } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import Cabelo from "../../assets/images/cabelo.jpg";
import Makeup from "../../assets/images/makeup.jpg";
import Unha from "../../assets/images/unha.jpg";
import Marca from "../../assets/images/marca.png";

import { Avatar, Button, Card, Text } from "react-native-paper";
import { CircleUserRound, ChevronLeft } from "lucide-react-native";

export default function PCadastro({ navigation }) {
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
            style={estilos.input}
            left={(props) => <Mail {...props} />}
          />

          <Text style={estilos.label}>E-mail</Text>
          <TextInput style={estilos.input} />

          <Text style={estilos.label}>Contato</Text>
          <TextInput style={estilos.input} />

          <View>
            <View style={estilos.botoes}>
              <Pressable
                style={estilos.botao}
                onPress={() =>
                  navigation.navigate("HomeScreen", { screen: "Home" })
                }
              >
                <Text style={estilos.textoBotao}>ENTRAR</Text>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  botao: {
    backgroundColor: "#ffa187",
    padding: 20,
    width: "60%",
    borderRadius: 20,
  },
  textoBotao: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
});
