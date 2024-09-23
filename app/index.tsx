import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

// Funcao onde tem a pagina principal do app
export default function App() {
  return (
    <View style={styles.container}>
      <Text>DREAMS ARE MESSAGES FROM THE DEEP</Text>
      <Text>POWER OVER SPICE IS POWER OVER ALL</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// Estilos do app, com um fundo branco e alinhamento centralizado
const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
