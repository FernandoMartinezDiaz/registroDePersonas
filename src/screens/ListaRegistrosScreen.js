import React, { useContext } from "react";
import { Container, Content, List, ListItem, Text } from "native-base";
import { StyleSheet} from "react-native";

//Utilizar el contexto de registros
import { DatosContext} from "../context/DatosContext";


const ListaRegistroScreen = () =>{
    const {datos} = useContext (DatosContext);
    return(
        <Container>
            <Content>
                <Text>datos</Text>
                <List>
                    {datos ? datos.map((dato) => (
                            <ListItem>
                                <Text key={dato.id}>{dato.dato}</Text>
                            </ListItem>
                    ))
                    : null}
                </List>
            </Content>
        </Container>
    )

};

const styles = StyleSheet.create ({});
  
export default ListaRegistroScreen;
