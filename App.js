import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screen/Login";
import Home from "./src/screen/Home";
import Agendar from "./src/screen/Agendar";
import Perfil from "./src/screen/Perfil";

import {
  CalendarDays,
  House,
  UserRound,
  FileChartColumnIncreasing,
} from "lucide-react-native";
import Relatorio from "./src/screen/Relatorio";
import Cadastro from "./src/screen/Cadastro";
import Cabelos from "./src/screen/Cabelos";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#f57856",
          paddingBottom: 8,
          paddingTop: 10,
          height: 60,
        },
        tabBarIconStyle: {
          marginBottom: 5,
        },
        tabBarActiveTintColor: "#fa967a",
        tabBarInactiveTintColor: "#ffff",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTab : styles.inactiveTab}>
              <House color={color} size={27} />
            </View>
          ),
          tabBarLabel: () => null,
          // headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cabelos"
        component={Cabelos}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTab : styles.inactiveTab}>
              <House color={color} size={27} />
            </View>
          ),
          tabBarLabel: () => null,
          headerShown: false,
          tabBarButton: () => null, // Esta linha oculta a aba
        }}
      />
      <Tab.Screen
        name="Agendamento"
        component={Agendar}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTab : styles.inactiveTab}>
              <CalendarDays color={color} size={27} />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Relatório"
        component={Relatorio}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTab : styles.inactiveTab}>
              <FileChartColumnIncreasing color={color} size={27} />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTab : styles.inactiveTab}>
              <UserRound color={color} size={27} />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#1D1D1D" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#ffff",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  inactiveTab: {
    // Estilo para ícones inativos, se necessário
  },
});
