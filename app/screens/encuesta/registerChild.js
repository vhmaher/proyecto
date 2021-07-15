
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Alert,
    FlatList,
    TouchableOpacity
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Picker } from "@react-native-picker/picker";

export default function Child(props) {

    const { navigation, route } = props;
    const { Eid, Enombre } = route.params;

    const [dni, guardarNDNI] = useState('');
    const [nombres, guardarNNombres] = useState('');
    const [apPaterno, guardarNPaterno] = useState('');
    const [apMaterno, guardarNMaterno] = useState('');
    const [nacimiento, guardarNacimiento] = useState(new Date());
    const [sexo, guardarSexo] = useState('');
    const [centroSAlud, guardarCentroSalud] = useState('');
    const [prematuro, guardarPrematuro] = useState('');
    const [categoria, guardarCategoria] = useState('');


  



    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text: 'ok'
            }]
        )
    }

    const Formatos = () => {
        if (dni.trim() === ''
            || nombres.trim() === ''
            || apPaterno.trim() === ''
            || centroSAlud.trim() === ''
            || dni.trim() === ''
            || centroSAlud.trim() === ''
        ) {
            mostrarAlerta();
            return;
        }
        else {
            fetch('http://192.168.1.20/conexion/register_child.php', {
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
                    sexo:sexo,
                    estab_salud: centroSAlud,
                    prematuro: prematuro,
                    categoria: categoria,
                    id_encuestado: Eid,
                })

            }).then((response) => response.json())
                .then((responseJson) => {
                    
                    navigation .navigate("contactos");
                }).catch((error) => {
                    console.error(error);
                });
        }
    }

    
    return (
        <ScrollView>
      
            <View style={styles.formulario}>
                <Text style={styles.titulo} > Datos de Niño </Text>
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
                <Text style={styles.label} >Sexo</Text>
                <Picker
                    selectedValue={sexo}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(texto) => guardarSexo(texto)}
                >
                    <Picker.Item label="VARON" value="1" />
                    <Picker.Item label="MUJER" value="0" />
                </Picker>
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
                    <Picker.Item label="SI" value="1" />
                    <Picker.Item label="NO" value="0" />
                </Picker>
                <Text style={styles.label} > Escoger formato</Text>
                <Picker
                    selectedValue={categoria}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(texto) => guardarCategoria(texto)}
                >
                    <Picker.Item label="Recien Nacido / Puerpera" value="p" />
                    <Picker.Item label="De 1 a menos de 6" value="s" />
                    <Picker.Item label="De 6 a 11 meses" value="t" />
                    <Picker.Item label="Mas de 1  a 3 años" value="c" />
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
        paddingVertical: 5,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
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