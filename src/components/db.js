import React from "react" ;
import * as SQLite from "expo-sqlite" ;

//crea y abre la base de datos
const db = SQLite.openDatabase("Registro.db");

//funcionalidades de nuestra base de datos

//Obtener los registros del usuario
const getDatos = (setDatosFunc) => {
    db.transaction((tx) => {
        tx.executeSql(
            "select * from datos",
             [], 
             (_, { rows: { _array } }) => { 
            setDatosFunc(_array); 
        },
        (_t, error) => {
            console.log("Error al obtener los registros"); 
            console.log(error);
        },
        (_t, _success) => {
            console.log("registros obtenidos");
        }
       );
    });
};   

//Insertar registros
const insertDatos = async (id,nombrePersona, fechaDeNacimiento, lugarDeNacimiento, successFunc) => {
  db.transaction((tx) => {
        tx.executeSql("insert into datos (id,nombrePersona, fechaDeNacimiento, lugarDeNacimiento) values (?,?,?,?)", [id,nombrePersona, fechaDeNacimiento, lugarDeNacimiento]);
    }, 
    (_t, error) => {
         console.log("error al insertar el dato"); 
         console.log(error);
    },
    (_t, _success) => {
        successFunc; 
    }
  );
};

//borrar la base de datos
const dropDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("drop table datos");
      },
      (_t, error) => { 
        console.log("error al eliminar la tabla de datos");
        reject(error);
      },
      (_t, result) => {
        resolve(result);
      }
    );
  });
};

// creacion de tabla de datos
const setupDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) =>{
    db.transaction(
      (tx) => {
        tx.executeSql(
          "create table if not exists datos (id integer primary key , nombrePersona text not null, fechaDeNacimiento text not null, lugarDeNacimiento text not null);"
        );
      },
      (_t, error) => {
        console.log("Error al momento de crear la tabla");
        console.log(error);
        reject(error);
      },
      (_t, success) =>{
        console.log("Tabla creada!");
        resolve(success)
      }
    );
  });
};

//agregar un registro por defecto
const setupDatosAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql("insert into datos ( id, nombrePersona, fechaDeNacimiento, lugarDeNacimiento) values (?,?,?,?)",[1,"HOLA", "HOLA","HOLA"
      ]);
      },
      (_t, error) => {
        console.log("Error al momento insertar los valores por defecto");
        console.log(error); 
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};

export const database = {
    getDatos,
    insertDatos,
    dropDatabaseTableAsync,
    setupDatabaseTableAsync,
    setupDatosAsync,
}; 