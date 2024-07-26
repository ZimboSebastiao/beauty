import { View, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { ChevronLeft } from "lucide-react-native";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

import SafeContainer from "../components/SafeContainer";

// Configurando o calendário para exibir em português
LocaleConfig.locales["pt"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  today: "Hoje",
};
LocaleConfig.defaultLocale = "pt";

export default function Agendar({ navigation }) {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <SafeContainer>
      <View style={estilos.cabecalho}>
        <ChevronLeft color="#ffff" size={32} />
        <Text style={estilos.textoCabecalho}> MARQUE SEU HORÁRIO</Text>
        <Avatar.Text size={39} label="GS" />
      </View>

      <View style={estilos.container}>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: "#fa967a",
            },
          }}
          theme={{
            selectedDayBackgroundColor: "#f57856",
            todayTextColor: "#f57856",
            arrowColor: "#f57856",
            textMonthFontWeight: "bold",
            textMonthFontSize: 22,
            monthTextColor: "#f57856",
          }}
        />
      </View>

      <View style={estilos.horarios}>
        <Text style={estilos.texto}>Horários disponíveis</Text>

        <View style={estilos.horas}>
          <Text style={estilos.hora}>18:20</Text>
          <Text style={estilos.hora}>18:20</Text>
          <Text style={estilos.hora}>18:20</Text>
          <Text style={estilos.hora}>18:20</Text>
          <Text style={estilos.hora}>18:20</Text>
          <Text style={estilos.hora}>18:20</Text>
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
    color: "#ffff",
    fontSize: 14,
  },
  container: {
    marginVertical: 40,
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
  },
  texto: {
    fontSize: 20,
    color: "#fa967a",
    fontWeight: "bold",
    textAlign: "center",
  },
  horarios: {
    width: "84%",
    padding: 20,
  },
  horas: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  hora: {
    backgroundColor: "#ffff",
    padding: 10,
    margin: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "white",
    elevation: 2,
  },
});
