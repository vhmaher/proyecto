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

export default function Contactos(props) {
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://192.168.1.20/conexion/question_list.php')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const actualizar = () => {
    setIsLoading(true);
    fetch('http://192.168.1.20/conexion/question_list.php')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.nombre
            ? item.nombre.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      <View style={styles.Listas}>
        <TouchableOpacity
          onPress={() => navigation.navigate("lista", {
            id: item.id,
            nombre: item.nombre,
            categoria: item.categoria,
            celular: item.celular
          })}>
          <View>
            <View >
              <Text style={styles.title}>{item.nombre}</Text>
              <Text style={styles.title}>{item.apPaterno}</Text>
              <Text style={styles.title}>{item.categoria}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#2C0251',
        }}
      />
    );
  };
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }
  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Buscar aqui"
        />
        <TouchableOpacity
          onPress={() => actualizar()}
          style={styles.button}>
          <View style={styles.metaInfo}>
            <Text >Actualizar </Text>
          </View>
        </TouchableOpacity>
        <FlatList
          style={styles.container}
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView >
  );
};

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



