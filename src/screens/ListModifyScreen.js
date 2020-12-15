import React, { useContext, useState } from "react";
import {StyleSheet} from "react-native";
import { Container, Content , Text} from "native-base";



//Utilizar el contexto de registros
import { DatosContext} from "../context/DatosContext";
import { useEffect } from "react/cjs/react.development";



const ListModifyScreen = ({ route, navigation}) =>{
    const { id } = route.params;
    const datosContext = useContext(DatosContext);
    const { getDatoById } = datosContext;

    return (
        <Content>
            <Container>
                <Text>{id}</Text>
            </Container>
        </Content>
    );
}

const styles = StyleSheet.create({});

export default ListModifyScreen;