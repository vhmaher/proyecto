import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function UserLogged(props) {

  const { navigation } = props;
  const UserSettings = () => {
    navigation.navigate("password");
  }
  const Comenzar = () => {
    navigation.navigate("contactos");
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => UserSettings()}
      >
        <Text style={styles.texto}> CAMBIAR CONTRASEÑA</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Comenzar()}
      >
        <Text style={styles.texto}>COMENZAR</Text>
      </TouchableOpacity>

    </View>
  )
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
    margin: 10,
  },

  TextInputStyleClass: {

    textAlign: 'center',
    marginBottom: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#D8A545',

    borderRadius: 5,

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