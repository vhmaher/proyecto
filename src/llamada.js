// How to Access Call Logs of Android Devices from React Native App
// https://aboutreact.com/access-call-logs-of-android-devices/

// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  FlatList,
} from 'react-native';

// import CallLogs API
import CallLogs from 'react-native-call-log';

const App = () => {
  const [listData, setListDate] = useState([]);
  const filter = {
    phoneNumbers: '984343946',
  }
  useEffect(() => {
    async function fetchData() {
      if (Platform.OS != 'ios') {
        try {
          //Ask for runtime permission
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
            {
              title: 'Ejemplo de registro de llamadas',
              message: 'Accede a tus registros de llamadas',
              buttonNeutral: 'Pregúntame Luego',
              buttonNegative: 'Cancelar',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            CallLogs.load(1, filter).then((c) => setListDate(c));
          } else {
            alert('Permiso de registro de llamadas denegado');
          }
        } catch (e) {
          alert(e);
        }
      } else {
        alert(
          '¡Lo siento! No puede obtener registros de llamadas en dispositivos iOS debido a problemas de seguridad',
        );
      }
    }
    fetchData();
  }, []);

  const ItemView = ({ item }) => {
    return (
      // FlatList Item
      <View>
        <Text style={styles.textStyle}>
          Fecha : {item.dateTime}
          {'\n'}
          Duracion : {item.duration}
          {'\n'}
          Telefono : {item.phoneNumber}
          {'\n'}

        </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={listData}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 16,
    marginVertical: 10,
  },
});