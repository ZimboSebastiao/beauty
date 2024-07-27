import { View, StyleSheet, Image, StatusBar, Pressable } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import Cabelo from "../../assets/images/cabelo.jpg";
import Makeup from "../../assets/images/makeup.jpg";
import Unha from "../../assets/images/unha.jpg";

import {
  Avatar,
  Card,
  Text,
  Button,
  Menu,
  Divider,
  PaperProvider,
} from "react-native-paper";
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
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <SafeContainer>
      <PaperProvider>
        <View style={estilos.cabecalho}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Button onPress={openMenu}>
                  <AlignLeft color="#ffff" size={32} />
                </Button>
              }
            >
              <Menu.Item
                onPress={() => navigation.navigate("Agendados")}
                title="Agendamentos"
              />
              <Menu.Item onPress={() => {}} title="Item 2" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
          </View>

          <Text style={estilos.textoCabecalho}>
            {" "}
            {obterSaudacao()}, Fulano!
          </Text>
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
      </PaperProvider>
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
