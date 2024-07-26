import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import SafeContainer from "../components/SafeContainer";
import Logotipo from "../../assets/images/logo.png";
import { Mail } from "lucide-react-native";

export default function Login({ navigation }) {
  return (
    <>
      <SafeContainer>
        <View style={estilos.logotipo}>
          <Image source={Logotipo} />
        </View>
        <View style={estilos.form}>
          <View>
            <Text style={estilos.label}>E-mail</Text>
            <TextInput
              placeholder="Digite seu email"
              style={estilos.input}
              left={(props) => <Mail {...props} />}
            />

            <Text style={estilos.label}>Senha</Text>
            <TextInput placeholder="Digite sua senha" style={estilos.input} />

            <Text style={estilos.recuperar}>Esqueceu a senha?</Text>
          </View>

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
            <View style={estilos.botoes}>
              <Pressable
                style={estilos.cadastro}
                onPress={() => navigation.navigate("Cadastro")}
              >
                <Text style={estilos.textoCadastro}>CRIAR UMA CONTA</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeContainer>
    </>
  );
}

const estilos = StyleSheet.create({
  logotipo: {
    width: "100%",
  },
  form: {
    width: "100%",
    padding: 20,
    paddingTop: 0,
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
    padding: 25,
    borderWidth: 1,
    borderRadius: 15,
    elevation: 3,
    borderColor: "white",
  },
  recuperar: {
    color: "#577672",
    fontSize: 15,
    textAlign: "right",
    paddingTop: 8,
  },
  botoes: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  botao: {
    backgroundColor: "#ffa187",
    padding: 20,
    width: "100%",
    borderRadius: 20,
  },
  textoBotao: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  cadastro: {
    backgroundColor: "rgb(0, 0, 0, 0.5)",
    padding: 20,
    width: "100%",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fa967a",
  },
  textoCadastro: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#fa967a",
  },
});
