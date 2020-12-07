import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Button, Container, Content, Form, H1, Textarea, Text } from 'native-base';

//Importar el contexto de las notas 
import {DatosContext} from "../context/DatosContext";

const ListCreateScreen = () => {
    const [dato, setDato] = useState("");
    const datosContext = useContext(DatosContext);
    const {datos, addNewDato, refreshDatos } = datosContext;

    const handlerNewDato = () =>{
      const id = 10;
      addNewDato(id, dato, refreshDatos);
    };

    return(
      <Content> 
        <Container>
           <H1>Ingresa el registro</H1>
           <Textarea  rowSpan={1} bordered placeholder="Escribir la información" value={dato} onChangeText={setDato}/>
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
