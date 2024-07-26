import { View, StyleSheet, Image } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import Cabelo from "../../assets/images/cabelo.jpg";
import Makeup from "../../assets/images/makeup.jpg";
import Unha from "../../assets/images/unha.jpg";

import { Avatar, Button, Card, Text } from "react-native-paper";

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function Home({ navigation }) {
  return (
    <SafeContainer>
      <Text>Home</Text>
      <View>
        <Card style={estilos.cartao}>
          <Card.Content style={estilos.cartaoFormata}>
            <Image source={Cabelo} style={estilos.imagem} />
            <Text variant="titleLarge" style={estilos.texto}>
              CABELO
            </Text>
          </Card.Content>
        </Card>
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
  cartao: {
    width: "80%",
    // backgroundColor: "red",
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
  },
});
