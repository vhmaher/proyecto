import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableHighlight,
    Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Picker } from "@react-native-picker/picker";

export default function register(props) {

    const [dni, guardarDNI] = useState('');
    const [nombres, guardarNombres] = useState('');
    const [apPaterno, guardarapPaterno] = useState('');
    const [apMaterno, guardarMaterno] = useState('');
    const [nacimiento, guardarNacimiento] = useState(new Date());
    const [telefono, guardartelefono] = useState('');
    const [direccion, guardardireccion] = useState('');
    const [refVivienda, guardarrefVivienda] = useState('');
    const [categoria, guardarCategoria] = useState('GESTANTE');
    const {navigation}=props;

    const crearContacto = () => {
        if (dni.trim() === ''
            || nombres.trim() === ''
            || apMaterno.trim() === ''
            || apPaterno.trim() === ''
            || telefono.trim() === ''
            || direccion.trim() === ''
        ) {
            mostrarAlerta();
            return;
        }
        else {
            fetch('http://192.168.1.10/conexion/register_all.php', {
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

    return (
        <ScrollView>
            <View style={styles.formulario}>

                <Text style={styles.titulo} > REGISTRO</Text>
                <Text style={styles.label} > Datos</Text>
                <Text style={styles.label} > D.N.I.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarDNI(texto)}
                    maxLength={8}
                    keyboardType='phone-pad'
                />
                <Text style={styles.label} > Nombres</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarNombres(texto)}
                />
                <Text style={styles.label} > Apellido Paterno</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarapPaterno(texto)}
                />
                <Text style={styles.label} > Apellido Materno</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarMaterno(texto)}
                />
                <Text style={styles.label} > Fecha de Nacimiento</Text>
                <View style={styles.container}>
                    <DatePicker
                        date={nacimiento}
                        onDateChange={guardarNacimiento}
                        mode={'date'}
                        locale={'es'}
                    />
                </View>
                <Text style={styles.label} > Telefono</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardartelefono(texto)}
                    keyboardType='phone-pad'
                />
                <Text style={styles.label} > Direccion</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardardireccion(texto)}
                />
                <Text style={styles.label} > Referencia de Vivienda</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={texto => guardarrefVivienda(texto)}
                />
                <Text style={styles.label} >Seleccione Niño o Gestante</Text>
                <Picker
                    selectedValue={categoria}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => guardarCategoria(itemValue)}
                >
                    <Picker.Item label="GESTANTE" value="g" />
                    <Picker.Item label="APODERADO" value="n" />
                </Picker>
            </View>
            <View>
                <TouchableHighlight onPress={() => crearContacto()} style={styles.btnGuardar}>
                    <Text style={styles.textoGuardar}>GUARDAR</Text>
                </TouchableHighlight>
            </View>
        </ScrollView>
    );
}
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
        marginTop: 5,
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
