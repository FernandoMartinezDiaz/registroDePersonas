import React from 'react';
import {   View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import useDatabase from "./src/hooks/useDatabase";
import {DatosContextProvider} from "./src/context/DatosContext";
import ListaRegistroScreen from './src/screens/ListaRegistrosScreen';


export default function App() {
  //Prevenir que la pantalla de splash se oculte
  SplashScreen.preventAutoHideAsync();

  const isLoadingComplete = useDatabase();
  //Ocultamos la pantalla de Spplash
  if (isLoadingComplete) SplashScreen.hideAsync();

  return (
    <View>
      <DatosContextProvider> 
       <ListaRegistroScreen/>
      </DatosContextProvider>
    </View>
  );
}
 
