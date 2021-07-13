
import React, { useState, useEffect } from 'react';
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
import { Picker } from "@react-native-picker/picker";

export default function Child(props) {

    const { navigation, route } = props;
    const { Eid, Enombre } = route.params;

    const [dniN, guardarNDNI] = useState('');
    const [nombresN, guardarNNombres] = useState('');
    const [apPaternoN, guardarNPaterno] = useState('');
    const [apMaternoN, guardarNMaterno] = useState('');
    const [nacimiento, guardarNacimiento] = useState(new Date());
    const [centroSAlud, guardarCentroSalud] = useState('');
    const [prematuro, guardarPrematuro] = useState('');
    const [categoria, guardarCategoria] = useState('');

    const crearContacto = () => {
        if (dni.trim() === ''
            || nombresN.trim() === ''
            || apPaternoN.trim() === ''
            || centroSAlud.trim() === ''
            || dniN.trim() === ''
            || centroSAlud.trim() === ''
        ) {
            mostrarAlerta();
            return;
        }
        else {
            fetch('http://192.168.3.62/conexion/register_child.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({

                    nombre: nombres,
                    apPaterno: apPaterno,
                    apMaterno: apMaterno,
                    dni: dni,
                    fecha_nacimiento: nacimiento,
                    celular: telefono,
                    direccion: direccion,
                    ref_vivienda: refVivienda,
                    categoria: categoria,
                    id_promotor: '1',
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

        meses = 0;
        edad = 0;
        var d = new Date(),
    
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        d = [year, month, day].join('-')
    
        var hoy = new Date(d);
        var cumpleanos = new Date(nacimiento);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        var meses = 0;
        if (hoy.getMonth() > cumpleanos.getMonth()) {
            meses = hoy.getMonth() - cumpleanos.getMonth();
        } else if (hoy.getMonth() < cumpleanos.getMonth()) {
            meses = 12 - (cumpleanos.getMonth() - hoy.getMonth());
        } else if (hoy.getMonth() == cumpleanos.getMonth() && hoy.getDate() > cumpleanos.getDate()) {
            if (hoy.getMonth() - cumpleanos.getMonth() == 0) {
                meses = 0;
            } else {
                meses = 11;
            }
    
        }


        const Formatos = () => {
            if (edad == 0 && mes == 0) {
                navigation.navigate("formato5", {
                    Eid: id,
                    Enombre: nombre
                });
    
            }
            if (meses < 6 && edad == 0) {
                navigation.navigate("formato1", {
                    Eid: id,
                    Enombre: nombre
                });
            }
            if (meses < 12 && meses >= 6 && edad == 0) {
                navigation.navigate("formato2", {
                    Eid: id,
                    Enombre: nombre
                });
            }
            if (edad >= 1 && meses <= 3) {
                navigation.navigate("formato5", {
                    Eid: id,
                    Enombre: nombre
                });
            }
            if (categoria === "gestante") {
                navigation.navigate("formato4", {
                    Eid: id,
                    Enombre: nombre
                });
            }
    
        }

    return (
        <ScrollView>
            <View style={styles.formulario}>
                <Text style={styles.titulo} > Datos de Niño</Text>
                <Text style={styles.label} > D.N.I. del Niño</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarNDNI(texto)}
                    maxLength={8}
                    keyboardType='phone-pad'
                />
                <Text style={styles.label} > Nombres del Niño:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarNNombres(texto)}

                />
                <Text style={styles.label} > Apellido Paterno del Niño:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarNPaterno(texto)}
                />
                <Text style={styles.label} > Apellido Materno del Niño:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarNMaterno(texto)}
                />
                <Text style={styles.label} > Fecha de Nacimiento</Text>
                <View>
                    <DatePicker
                        date={nacimiento}
                        onDateChange={guardarNacimiento}
                        mode={'date'}
                        locale={'es'}
                    />
                </View>
                <Text style={styles.label} > Establecimiento de Salud</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarCentroSalud(texto)}
                />
                <Text style={styles.label} > Prematuro</Text>
                <Picker
                    selectedValue={prematuro}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(texto) => guardarPrematuro(texto)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
            </View>
            <View>
                <TouchableHighlight onPress={() => Formatos()} style={styles.btnGuardar}>
                    <Text style={styles.textoGuardar}>GUARDAR</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
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
    titulo: {
        color: '#17202A',
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
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