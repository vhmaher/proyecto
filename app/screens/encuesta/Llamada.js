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
    FlatList
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

    return (
        <ScrollView>
            <View>
                <Text style={styles.label} > Llamar</Text>
                <View  style={styles.container}>
                    <TouchableOpacity onPress={() => realizarLlamada()} style={styles.btnLlamar}>
                        <Text style={styles.textoGuardar}>{Ecelular}</Text>

                    </TouchableOpacity>
                </View>
                <Text style={styles.label} > OBSERVACION</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarObserbacion(texto)}
                />
                <TouchableOpacity onPress={() => crearLlamada()} style={styles.btnGuardar}>
                    <Text style={styles.textoGuardar}>GUARDAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
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
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    titulo: {
        color: '#17202A',
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnGuardar: {
        padding: 20,
        backgroundColor: '#D00E36'
    },
    btnLlamar: {
        borderWidth: 1,
        padding: 20,
        borderColor: 'black',
        backgroundColor: '#47D845',
        borderRadius: 50
    },
    textoGuardar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})