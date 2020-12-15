import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Body, Card, CardItem, Container, Content, Fab, Icon, List, ListItem, Right, Text, View } from "native-base";

//Utilizar el contexto de registros
import { DatosContext} from "../context/DatosContext";



const ListaRegistrosScreen = ( {navigation} ) =>{
    const {datos} = useContext (DatosContext);
    console.log(datos);
    return(
        <Container >
            <Image source={require("../../assets/registro_logo.png")} 
            style={styles.imagenLogo}
            />
            <Content>
                <List>
                    {datos ? datos.map((dato) => (
                     <View key={dato.id}> 
                            <TouchableOpacity onPress={()=>{navigation.navigate("listModify", {id: dato.id})}}>
                                <Card>
                                    
                                        <CardItem >
                                            <Body>
                                                <Text>{dato.id}</Text>
                                            </Body>
                                            <Right>
                                                <Icon name ="arrow-forward"/>
                                            </Right>
                                        </CardItem> 
                                        <CardItem >
                                            <Text>{dato.nombrePersona}</Text>
                                        </CardItem> 
                                        <CardItem >
                                            <Text>{dato.fechaDeNacimiento}</Text> 
                                        </CardItem> 
                                        <CardItem >
                                            <Text>{dato.lugarDeNacimiento}</Text> 
                                        </CardItem> 
                                </Card>  
                            </TouchableOpacity> 
                     </View>  
                    ))
                    : null} 
                </List>
            </Content>
            <Fab 
                 active= { true }
                 position = "bottomRight"
                 style={{ backgroundColor: "#98F28E" }}
                 direction="up"
                 onPress={() => {navigation.navigate("listCreate"); }} 
                >
                 <Icon name="user-plus" type="Feather" />
                </Fab>
        </Container>
    );

};

const styles = StyleSheet.create ({
    imagenLogo: {
        width: 100,
        height: 100,
        //alignItems: "center",
        //justifyContent: "center",
    },

});
  
export default ListaRegistrosScreen;
