import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Container, Content, Form, H1, Textarea, Text, Spinner } from 'native-base';
import { useFonts, Roboto_500Medium} from "@expo-google-fonts/inter";

//Importar el contexto de las notas 
import {DatosContext} from "../context/DatosContext";

const ListCreateScreen = ({navigation}) => {
    const [dato, setDato] = useState("");
    const datosContext = useContext(DatosContext);
    const {addNewDato, refreshDatos } = datosContext;

    //Arreglar la fuente de manera asincrona
    const [fontsLoaded] = useFonts({
      Roboto_500Medium,
    });

    const handlerNewDato = () =>{
      addNewDato(dato, refreshDatos); 

      //Regresar a la pantalla anterior
      navigation.goBack();

    };

    //if (!fontsLoaded) return <Spinner color="blue"/>; 
 
    return(
      <Content> 
        <Container>
           <H1>Ingresa el registro</H1>
           <Textarea  rowSpan={5} bordered placeholder="Escribir la información" value={dato} onChangeText={setDato}/>
           <Button onPress={handlerNewDato}>
             <Text>
                Guardar
             </Text>
           </Button>
        </Container>
      </Content>
    );
};

const styles = StyleSheet.create ({});

export default ListCreateScreen;
