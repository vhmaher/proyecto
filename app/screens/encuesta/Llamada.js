import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
    Linking,
    Image
} from 'react-native';

import CallLogs from 'react-native-call-log';

export default function Llamada(props) {

    const { navigation, route } = props;
    const { Eid, Enombre, Ecelular } = route.params;
    const [observacion, guardarObserbacion] = useState();
    const [llamada, guardarLlamada] = useState();
    const [duracion, guardarDuracion] = useState();

    const [listData, setListDate] = useState([]);
    navigation.setOptions({ title: Enombre })

    const realizarLlamada = () => {
        Linking.openURL(`tel:${Ecelular}`);
    }

    const crearLlamada = () => {
        if (observacion.trim() === '') {
            mostrarAlerta();
            return;
        }
        else {
            fetch('http://192.168.3.62/conexion/register_call.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                    observacion: observacion,
                    datos_llamada: item.dateTime,
                    duracion: item.duration,

                })

            }).then((response) => response.json())
                .then((responseJson) => {
                    navigation.navigate("Contactos");


                }).catch((error) => {
                    console.error(error);
                });
        }
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text: 'ok'
            }]
        )
    }

    const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label} > REALIZAR LLAMADA</Text>
                
                <Image
              source={require("../../../assests/user.png")}
              resizeMode="contain"
              style={styles.image2}
            />
                <View  >

                    <TouchableOpacity onPress={() => realizarLlamada()} style={styles.button}>
                        <Text style={styles.textoGuardar}>Lamar : {Ecelular}</Text>
                        <Image
                            source={require("../../../assests/telefono.png")}
                            resizeMode="contain"
                            style={styles.image}
                        />
                    </TouchableOpacity>
                    <Text style={styles.label} > OBSERVACION</Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        value={observacion}
                        numberOfLines={4}
                        onChangeText={text => guardarObserbacion(text)}
                        placeholder="Ingrese sus observaciones"
                    />
                    <TouchableOpacity onPress={() => crearLlamada()} style={styles.btnGuardar}>
                        <Text style={styles.textoGuardar}>GUARDAR</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    image2: {
        alignItems: 'center',
        height: 60,
        width: "20%",
        marginBottom: 5,
    
    },
    image: {
        alignItems: 'center',
        height: 45,
        width: "35%",
        marginBottom: 5,

    },
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        alignItems: 'center'

    },
    input: {
        marginHorizontal: '2.5%',
        height: 80,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderRadius: 5,
        borderColor: '#7688',
        backgroundColor: '#FFFFFF',
    },
    titulo: {
        color: '#17202A',
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnGuardar: {
        alignItems: 'center',
        backgroundColor: '#FF3A00',
        borderWidth: 1,
        borderColor: '#7688',
        padding: 10,
        width: 300,
        marginTop: 16,
        borderRadius: 20
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#47D845',
        borderWidth: 1,
        borderColor: '#7688',
        padding: 10,
        width: 300,
        marginTop: 16,
        borderRadius: 20
    },
    textoGuardar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})