import React, { useState} from 'react';

import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';

export default function RegistroUsuario() {

  const [dni, setdni] = useState('');
  const [usuario, setusuario] = useState('');
  const [password, setpassword] = useState('');

  const UserRegistrationFunction = () => {

    fetch('http://192.168.3.97/conexion/user_registration.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        dni: dni,

        usuario: usuario,

        contraseña: password,


      })

    }).then((response) => response.json())
      .then((responseJson) => {

        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });

  }

  return (

    <View style={styles.MainContainer}>

      <Text style={styles.title}>Actualizar Datos</Text>

      <TextInput
        placeholder="Ingrese DNI"
        onChangeText={texto => setdni(texto)}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
      />

      <TextInput
        placeholder="Ingrese Usuario"
        onChangeText={texto => setusuario(texto)}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
      />

      <TextInput
        placeholder="Ingrese Nueva Contraseña"
        onChangeText={texto => setpassword(texto)}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Ingrese tra vez la Nueva Contraseña"
        onChangeText={texto => setpassword(texto)}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
        secureTextEntry={true}
      />
      <Button title="Registrar Usuario" onPress={() => UserRegistrationFunction()} color="#2196F3" />

    </View>

  );
}


const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    flex: 1,
    margin: 10
  },

  TextInputStyleClass: {

    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5,
  },

  title: {

    fontSize: 22,
    color: "#009688",
    textAlign: 'center',
    marginBottom: 15
  }

});