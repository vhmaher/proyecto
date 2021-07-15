


import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';


export default function ListaAporado(props) {


  const { navigation, route } = props;
  const { id, nombre, categoria, celular } = route.params;
  const [filterGestante, setFilterGestante] = useState([]);
  const [masterDataGestante, setMasterGestante] = useState([]);
  const [filterInfante, setFilterInfante,] = useState([]);
  const [masterDataInfante, setMasterInfante] = useState([]);
  useEffect(() => {
    
    fetch('http://192.168.1.20/conexion/Filter_gestante.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_encuestado: id,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        setFilterGestante(responseJson);
        setMasterGestante(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {

    fetch('http://192.168.1.20/conexion/Filter_infante.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_encuestado: id,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        setFilterInfante(responseJson);
        setMasterInfante(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  navigation.setOptions({ title: nombre })
  const ItemView = ({ item }) => {
    return (
      <View style={styles.Listas}>
        <TouchableOpacity
          onPress={() =>  navigation.navigate("persona",
          {
            Eid: id,
            nombre: nombre,
            categoria: categoria,
            celular: celular
          })}>
          <View>
            <Text style={styles.title}>{item.nombre}</Text>
            <Text style={styles.title}>{item.apPaterno}</Text>
            <Text style={styles.title}>{item.fecha_nacimiento}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const ItemView2 = ({ item }) => {
    return (
      <View style={styles.Listas}>
        <TouchableOpacity
          onPress={() => navigation.navigate("persona",
            {
              Eid: id,
              nombre: nombre,
              categoria: categoria,
              celular: celular
            })}>
          <View>
            <Text style={styles.title}>{item.fecha_parto}</Text>
            <Text style={styles.title}>{item.estab_salud}</Text>
          </View>
        </TouchableOpacity>
      </View >
    );
  };
  return (
    <View>
      <FlatList
        style={styles.container}
        data={filterGestante}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView2}
      />
      <FlatList
        style={styles.container}
        data={filterInfante}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#F5ECE2',
  },
  button: {
    alignItems: 'center',

    borderWidth: 1,

    borderRadius: 20
  },
  Listas: {
    backgroundColor: '#DC7B08',
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20
  },
  textInputStyle: {
    height: 60,
    borderWidth: 1,
    paddingLeft: 132,
    margin: 5,
    borderRadius: 30,
    borderColor: '#7688',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingLeft: 50,
    margin: 4,
    borderRadius: 20,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  image: {
    alignItems: 'center',
    height: 60,
    width: "20%",
    marginBottom: 5,

  },
});