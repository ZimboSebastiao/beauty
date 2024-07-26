import { View, StyleSheet, Image, StatusBar, Pressable } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import Cabelo from "../../assets/images/cabelo.jpg";
import Makeup from "../../assets/images/makeup.jpg";
import Unha from "../../assets/images/unha.jpg";
import Marca from "../../assets/images/marca.png";

import { Avatar, Button, Card, Text } from "react-native-paper";
import { CircleUserRound, AlignLeft } from "lucide-react-native";

const obterSaudacao = () => {
  const horas = new Date().getHours();
  if (horas < 12) {
    return "Bom dia";
  } else if (horas < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
};

export default function Home({ navigation }) {
  return (
    <SafeContainer>
      <View style={estilos.cabecalho}>
        <AlignLeft color="#ffff" size={32} />
        {/* <Image source={Marca} /> */}

        <Text style={estilos.textoCabecalho}> {obterSaudacao()}, Fulano!</Text>
        <Avatar.Text size={39} label="GS" />
      </View>

      <View style={estilos.viewCartao}>
        <Pressable
          style={estilos.cartao}
          onPress={() => navigation.navigate("Cabelos")}
        >
          <Card>
            <Card.Content style={estilos.cartaoFormata}>
              <Image source={Cabelo} style={estilos.imagem} />
              <Text variant="titleLarge" style={estilos.texto}>
                CABELO
              </Text>
            </Card.Content>
          </Card>
        </Pressable>
      </View>

      <View>
        <Card style={estilos.cartao}>
          <Card.Content style={estilos.cartaoFormata}>
            <Image source={Unha} style={estilos.imagem} />
            <Text variant="titleLarge" style={estilos.texto}>
              UNHAS
            </Text>
          </Card.Content>
        </Card>
      </View>
      <View>
        <Card style={estilos.cartao}>
          <Card.Content style={estilos.cartaoFormata}>
            <Image source={Makeup} style={estilos.imagem} />
            <Text variant="titleLarge" style={estilos.texto}>
              Makeup
            </Text>
          </Card.Content>
        </Card>
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
    fontSize: 15,
    fontWeight: "bold",
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
});
