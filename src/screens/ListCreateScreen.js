import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Container, Content,H1,Text, Spinner, View, Item, Input } from 'native-base';
import * as Font from "expo-font";

//Importar el contexto de las notas 
import {DatosContext} from "../context/DatosContext";
import { useEffect } from "react/cjs/react.development";

const ListCreateScreen = ({navigation}) => {
    const [nombrePersona, setNombrePersona] = useState("");
    const [fechaDeNacimiento, setfechaDeNacimiento]= useState("");
    const [lugarDeNacimiento, setlugarDeNacimiento]= useState("");
    const [fontsLoaded, setFontsLoaded]= useState(false);
    const datosContext = useContext(DatosContext);
    const {addNewDato, refreshDatos } = datosContext;

    //Arreglar la fuente de manera asincrona
   
    useEffect(()=>{
      const loadFontsAsync = async () => {
        await Font.loadAsync({
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        }).then(()=>{
          setFontsLoaded(true);
        });
      };
      loadFontsAsync();
    }, []);

     

    const handlerNewDato = () =>{
      addNewDato(nombrePersona,fechaDeNacimiento,lugarDeNacimiento, refreshDatos); 

      //Regresar a la pantalla anterior
      navigation.goBack();

    };

    if (!fontsLoaded) 
      return (
        <Content contentContainerStyle = {{ flex: 1, justifyContent: "center"}}>
          <Spinner color="blue" />
        </Content>
      );
 
    return(
      <Content> 
        <Container>
          <View>
            <H1>Ingresa el registro</H1>
            <Item>
                <Input  
                  placeholder="Escribir el nombre de la persona" 
                  value={nombrePersona} 
                  onChangeText={setNombrePersona}/>
              </Item>
              <Item>
                <Input  
                  placeholder="Escribir la fecha de nacimiento" 
                  value={fechaDeNacimiento} 
                  onChangeText={setfechaDeNacimiento}/>
              </Item>
              <Item>
                <Input  
                  placeholder="Escribir el lugar de nacimiento" 
                  value={lugarDeNacimiento} 
                  onChangeText={setlugarDeNacimiento}/>
              </Item>
            <Button onPress={handlerNewDato}>
              <Text>
                  Guardar
              </Text>
            </Button>
          </View>
        </Container>
      </Content>
    );
};

const styles = StyleSheet.create ({});

export default ListCreateScreen;
