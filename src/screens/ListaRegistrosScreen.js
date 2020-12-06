import React, { useContext } from "react";
import { StyleSheet} from "react-native";
import { Container, Content, Fab, Icon, List, ListItem, Text } from "native-base";

//Utilizar el contexto de registros
import { DatosContext} from "../context/DatosContext";


const ListaRegistrosScreen = ( {navigation} ) =>{
    const {datos} = useContext (DatosContext);
    console.log(datos);
    return(
        <Container>
            <Content>
                <List>
                    {datos ? datos.map((dato) => (
                        <ListItem key={dato.id}>
                            <Text>{dato.dato}</Text>
                        </ListItem>
                    ))
                    : null}
                </List>
                <Fab 
                 active= { true }
                 position = "bottomRight"
                 style={{ backgroundColor: "#ff0023" }}
                 direction="up"
                 onPress={() => {navigation.navigate("listCreate"); }} 
                >
                 <Icon name="plus" type="FontAwesome" />
                </Fab>
            </Content>
        </Container>
    );

};

const styles = StyleSheet.create ({});
  
export default ListaRegistrosScreen;
