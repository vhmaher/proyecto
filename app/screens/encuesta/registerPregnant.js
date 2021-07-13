import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Alert
} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function Pregnant(props) {

    const { navigation, route } = props;
    const { Eid, Enombre } = route.params;
    const [fpp, guardarFPP] = useState(new Date());
    const [centroSAlud, guardarCentroSalud] = useState('');

    const crearContacto = () => {
        if (centroSAlud.trim() === '') {
            mostrarAlerta();
            return;
        }
        else {
            fetch('http://192.168.3.62/conexion/register_pregnant.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fecha_parto: fpp,
                    estab_salud: centroSAlud,
                    id_encuestado: Eid,
                })

            }).then((response) => response.json())
                .then((responseJson) => {
                    navigation.navigate("formato4");


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
                <Text style={styles.titulo} > REGISTRO DE {Enombre}</Text>
                <Text style={styles.label} > Establecimiento de Salud</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarCentroSalud(texto)}
                />
                <Text style={styles.label} > Fecha Probable del Parto</Text>
                <View style={styles.container}>
                    <DatePicker
                        date={fpp}
                        onDateChange={guardarFPP}
                        mode={'date'}
                        locale={'es'}
                    />
                </View>
                <TouchableHighlight onPress={() => crearContacto()} style={styles.btnGuardar}>
                    <Text style={styles.textoGuardar}>GUARDAR</Text>
                </TouchableHighlight>
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
    textoGuardar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})