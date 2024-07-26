import { View, StyleSheet, Image } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import Cabelo from "../../assets/images/cabelo.jpg";

import { Avatar, Button, Card, Text } from "react-native-paper";

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function Home({ navigation }) {
  return (
    <SafeContainer>
      <Text>Home</Text>
      <View style={estilos.cartao}>
        <Card>
          {/* <Card.Title
          // left={LeftContent}
          /> */}
          <Card.Content style={estilos.cartaoFormata}>
            {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
            <Image source={Cabelo} style={estilos.imagem} />
            <Text variant="titleLarge">Card title</Text>
          </Card.Content>
        </Card>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    width: "80%",
    backgroundColor: "red",
  },
  cartaoFormata: {
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagem: {
    backgroundColor: "red",
    width: "60%",
    // height: "100%",
  },
});
