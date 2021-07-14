import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default function Login(props) {

  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [User, setUser] = useState('');
  const [UserPassword, setUserPassword] = useState('');


  const UserLoginFunction = () => {
    setIsLoading(true);
    fetch('http://192.168.3.62/conexion/User_Login.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuario: User,
        contraseña: UserPassword
      })

    }).then((response) => response.json())
      .then((responseJson) => {

        // Si hay comunicacion con el servidor
        if (responseJson === 'Datos Correctos') {
          navigation.navigate('usersession');

        }
        else {
          Alert.alert(responseJson);
        }
        setIsLoading(false);
      }).catch((error) => {
        console.error(error);
      });
  }

  const UserRegister = () => {
    navigation.navigate('account');
  }
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }
  return (

    <View style={styles.MainContainer}>
      <View>
        <Image
          source={require("../../../assests/escudo-dorado.png")}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>INICIO DE SESION</Text>
      <TextInput
        placeholder="Ingrese Usuario"
        onChangeText={texto => setUser(texto)}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
      />
      <TextInput
        placeholder="Ingrese Contraseña"
        onChangeText={texto => setUserPassword(texto)}
        underlineColorAndroid='transparent'
        style={styles.TextInputStyleClass}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => UserLoginFunction()}
      >
        <Text style={styles.texto}> INGRESAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => UserRegister()}
      >
        <Text style={styles.texto}>REGISTRAR</Text>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    marginBottom: 40
  },
  button: {
    alignItems: "center",
    backgroundColor: "#D8A545",
    padding: 10,
    marginBottom: 7,
    borderRadius: 50
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10
  },
  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#D8A545',
    borderRadius: 5
  },
  texto: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    fontSize: 22,
    color: "#009688",
    textAlign: 'center',
    marginBottom: 15
  }
});