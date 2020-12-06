import React, { useContext } from "react";
import { StyleSheet} from "react-native";
import { Container, Content, List, ListItem, Text } from "native-base";

//Utilizar el contexto de registros
import { DatosContext} from "../context/DatosContext";


const ListaRegistrosScreen = () =>{
    const {datos} = useContext (DatosContext);
    console.log(datos);
    return(
        <Container>
            <Content>
              <Text>datos</Text>
                <List>
                    {datos ? datos.map((dato) => (
                        <ListItem key={dato.id}>
                            <Text>{dato.dato}</Text>
                        </ListItem>
                    ))
                    : null}
                </List>
            </Content>
        </Container>
    );

};

const styles = StyleSheet.create ({});
  
export default ListaRegistrosScreen;
