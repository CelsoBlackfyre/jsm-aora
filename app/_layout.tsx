import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";
// Slot importa o componente da pagina principal do app

// Funcao que determina o layout principal do app, aqui pode ser adicionado o header, footer, etc. Itens que serao comuns a todas as paginas
const RootLayout = () => {
  return (
    <>
      {/* <Slot /> */}
      {/* /\ Chamando o slot para puxar o conteudo da pagina, no caso o index.tsx*/}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      {/* /\ Stack é uma alternativa do Slot, um componente do expo-router que permite criar um stack de rotas, no caso, a pagina principal e a pagina de login */}
    </>
  );
};

export default RootLayout;
