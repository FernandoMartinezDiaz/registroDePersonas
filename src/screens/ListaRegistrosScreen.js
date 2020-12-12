import React, { useContext } from "react";
import { StyleSheet} from "react-native";
import { Container, Content, Fab, Icon, List, ListItem, Text } from "native-base";

//Utilizar el contexto de registros
import { DatosContext} from "../context/DatosContext";


const ListaRegistrosScreen = ( {navigation} ) =>{
    const {datos} = useContext (DatosContext);
    console.log(datos);
    return(
        <Container >
            <Content>
                <List>
                    {datos ? datos.map((dato) => (
                        <ListItem key={dato.id}>
                            <Text>{dato.id}</Text>
                            <Text>{dato.nombrePersona}</Text>
                            <Text>{dato.fechaDeNacimiento}</Text>
                            <Text>{dato.lugarDeNacimiento}</Text>
                        </ListItem>
                    ))
                    : null}
                </List>
                <Fab 
                 active= { true }
                 position = "bottomRight"
                 style={{ backgroundColor: "#98F28E" }}
                 direction="up"
                 onPress={() => {navigation.navigate("listCreate"); }} 
                >
                 <Icon name="user-plus" type="Feather" />
                </Fab>
            </Content>
        </Container>
    );

};

const styles = StyleSheet.create ({});
  
export default ListaRegistrosScreen;
