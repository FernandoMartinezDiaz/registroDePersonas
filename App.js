import React from 'react';
import {   View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import useDatabase from "./src/hooks/useDatabase";
import { NavigationContainer } from "@react-navigation/native";
import {DatosContextProvider} from "./src/context/DatosContext";
import ListaRegistrosScreen from "./src/screens/ListaRegistrosScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ListCreateScreen from "./src/screens/ListCreateScreen";

const Stack = createStackNavigator();


export default function App() {
  //Prevenir que la pantalla de splash se oculte
  SplashScreen.preventAutoHideAsync();

  const isLoadingComplete = useDatabase();
  //Ocultamos la pantalla de Spplash
  if (isLoadingComplete) SplashScreen.hideAsync();

  return (
    <View style = {{ flex: 1 }}>
      <DatosContextProvider> 
          <NavigationContainer>
            <Stack.Navigator initialRouteName= "listaRegistro">
              <Stack.Screen name = "listaRegistro" component = { ListaRegistrosScreen } />
              <Stack.Screen name = "listCreate" component = { ListCreateScreen }/>
            </Stack.Navigator>
          </NavigationContainer>
      </DatosContextProvider>
    </View>
  );
};
 
