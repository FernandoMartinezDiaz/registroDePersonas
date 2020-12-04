import React from "react" ;
import * as SQLite from "expo-sqlite" ;

//crea y abre la base de datos
const db = SQLite.openDatabase("Registro.db");

//funcionalidades de nuestra base de datos

//Obtener los registros del usuario

const getDatos = (setDatosFunc) => {
    db.transaction(tx => {
        tx.executeSql("select * from datos", [], (_, { rows: { _array }}) => { 
            setDatosFunc( _array ); 
        },(_t, error) => {console.log("Error al obtener los registros`"); console.log(error) },
        (_t, _succes) => {
            console.log("registros obtenidos");
        }
       );
    });
};

//Insertar registros
const insertDatos = (datos, succesFunc) => {
  db.transaction((tx) => {
        tx.executeSql("insert into datos (dato) values {?}", [datos])
    }, (_t, error) => {
         console.log("error al ingresar el dato"); 
         console.log(error);
    },
    (_t, _succes) => {
        succesFunc;
    }
  );
};

//borrar la base de datos
const dropDataTableAsync = async () => {
    return new Promise((resolve, reject) =>{
        db.transaction((tx) => {
            tx.executeSql("drop table datos")
        }, (_, result) => { resolve(result) },
        (_,error) => { 
            console.log("error al eliminar la tabla de datos");
            reject(error);
        }
       );
    });
};

// creacion de tabla de datos
const setupDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql("Create table if not exist datos (id integer primary key no null, dato text)"
           );
        }, (_t, error) => { console.log("error al momento de crear la tabla"); 
            console.log(error);
            reject(error);
        },
        (_t, succes) => {
            resolve(succes);
        }
      );
    });
};

export const database = {
    getDatos,
    insertDatos,
    dropDataTableAsync,
    setupDatabaseTableAsync,
}