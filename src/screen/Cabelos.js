import { View, StyleSheet, Text } from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import Cabelo from "../../assets/images/cabelo.jpg";
import Makeup from "../../assets/images/makeup.jpg";
import Unha from "../../assets/images/unha.jpg";

import { Avatar, Button, Card } from "react-native-paper";
import { CircleUserRound, AlignLeft, ChevronLeft } from "lucide-react-native";

export default function Cabelos({ navigation }) {
  return (
    <SafeContainer>
      <View style={estilos.cabecalho}>
        <ChevronLeft color="#ffff" size={32} />
        <Text style={estilos.titulo}> CABELO</Text>

        <Avatar.Text size={39} label="GS" />
      </View>

      <View style={estilos.grupo}>
        <View style={estilos.viewCartao}>
          <View style={estilos.cartaoFormata}>
            <Text style={estilos.texto}>HIDRATAÇÃO +</Text>
            <Text style={estilos.texto}> ESCOVA</Text>
            <Text style={estilos.textoCabecalho}>1.200KZ</Text>
          </View>
          <View style={estilos.cartao}>
            <Text style={estilos.textoMarcar}>MARCAR</Text>
            <Text style={estilos.textoMarcar}>HORÁRIO</Text>
          </View>
        </View>

        <View style={estilos.viewCartao}>
          <View style={estilos.cartaoFormata}>
            <Text style={estilos.texto}>CORTE + ESCOVA</Text>

            <Text style={estilos.textoCabecalho}>1.000KZ</Text>
          </View>
          <View style={estilos.cartao}>
            <Text style={estilos.textoMarcar}>MARCAR</Text>
            <Text style={estilos.textoMarcar}>HORÁRIO</Text>
          </View>
        </View>

        <View style={estilos.viewCartao}>
          <View style={estilos.cartaoFormata}>
            <Text style={estilos.texto}>PENTEADO</Text>

            <Text style={estilos.textoCabecalho}>900KZ</Text>
          </View>
          <View style={estilos.cartao}>
            <Text style={estilos.textoMarcar}>MARCAR</Text>
            <Text style={estilos.textoMarcar}>HORÁRIO</Text>
          </View>
        </View>

        <View style={estilos.viewCartao}>
          <View style={estilos.cartaoFormata}>
            <Text style={estilos.texto}>CORTE</Text>

            <Text style={estilos.textoCabecalho}>750KZ</Text>
          </View>
          <View style={estilos.cartao}>
            <Text style={estilos.textoMarcar}>MARCAR</Text>
            <Text style={estilos.textoMarcar}>HORÁRIO</Text>
          </View>
        </View>

        <View style={estilos.viewCartao}>
          <View style={estilos.cartaoFormata}>
            <Text style={estilos.texto}>PINTURA</Text>

            <Text style={estilos.textoCabecalho}>850KZ</Text>
          </View>
          <View style={estilos.cartao}>
            <Text style={estilos.textoMarcar}>MARCAR</Text>
            <Text style={estilos.textoMarcar}>HORÁRIO</Text>
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
  },
  textoCabecalho: {
    color: "#577672",
    fontSize: 15,
    fontWeight: "bold",

    textAlign: "right",
    // backgroundColor: "red",
  },
  grupo: {
    padding: 15,
  },
  viewCartao: {
    marginTop: 35,
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "white",
  },
  cartao: {
    padding: 20,
    backgroundColor: "#fa967a",
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: "38%",
  },
  cartaoFormata: {
    width: "62%",
    // height: "30%",
    padding: 20,
    borderTopStartRadius: 30,
    borderBottomStartRadius: 30,
    backgroundColor: "#ffff",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  texto: {
    fontSize: 18,
    color: "#577672",
  },
  titulo: {
    fontSize: 20,
    color: "#577672",
  },
  textoMarcar: {
    fontSize: 18,
    color: "#577672",
  },
});
