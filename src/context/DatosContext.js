import React, {useEffect, createContext, useState} from "react";
import { database } from "../components/db";

export const DatosContext = createContext({});

export const DatosContextProvider = props =>{
    //Obtener los valores iniciales para el conetexto
    //Se obtienen desde los props
    const{
        notes: initialDatos,
        children

    } = props;

    //almacenar los valores en el estado 
    const [datos, setDatos] = useState(initialDatos);

    //Agregar u obtener los datos 
    useEffect (() =>{
        refreshDatos();
    }, []); 

    const refreshDatos = () => {
        return database.getDatos(setDatos);
    };

    const addNewDato = ( dato) =>{
        return database.insertDatos(dato, refreshDatos);
    };

    //Crear el objeto de contexto
    const datosContext = {
        datos,
        addNewDato
    };

    //pasar los valores al proveedor y retornarlos
    return(
        <DatosContext.Provider value={datosContext}>
            {children}
        </DatosContext.Provider>
    ); 
};
