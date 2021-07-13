import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView,Button } from 'react-native';
import { Picker } from "@react-native-picker/picker"

const Formato5 = () => {
    const [p1, setp1] = useState("SI");
    const [p2, setp2] = useState("Dolor de cabeza");
    const [p3, setp3] = useState("SI");
    const [p4, setp4] = useState("SI");
    const [p5, setp5] = useState("SI");
    const [p6, setp6] = useState("SI");
    const [p7, setp7] = useState("SI");
    const [p8, setp8] = useState("5 veces al dia");
    const [p9, setp9] = useState("SI");
    const [p10, setp10] = useState("SI");
    const [p11, setp11] = useState("BUENO");
    const [p12, setp12] = useState("SI");
    const [p13, setp13] = useState("SI");

    return (
        <ScrollView>
            <View style={styles.formulario}>
                <Text style={styles.label} >ENCUESTA PARA RECIEN NACIDO - PUERPERA</Text>
                <Text style={styles.label} >OBSERVACION</Text>
                <Text style={styles.label} >Edad en dias</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log}
                />
                <Text style={styles.label} >¿La madre tiene las manos limpias?</Text>
                <Picker
                    selectedValue={p1}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp1(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >PREGUNATAR POR AYER</Text>
                <Text style={styles.label} >¿Cuantas veces le dio de lactar?</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log}
                />
                <Text style={styles.label} >SIGNOS DE ALARMA</Text>
                <Picker
                    selectedValue={p2}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp2(itemValue)}
                >
                    <Picker.Item label="Dolor de cabeza" value="a" />
                    <Picker.Item label="Mareos" value="b" />
                    <Picker.Item label="Vision Borrosa" value="c" />
                    <Picker.Item label="Fiebre" value="d" />
                    <Picker.Item label="Bebe no se mueve" value="e" />
                    <Picker.Item label="Sangrado Vaginal" value="f" />
                    <Picker.Item label="No tiene" value="g" />
                </Picker>
                <Text style={styles.label} >PUERPERA</Text>
                <Text style={styles.label} >¿Acudio al centro de salud para su primer control RN?</Text>
                <Picker
                    selectedValue={p2}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp2(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>     
                <Text style={styles.label} >¿Esta usted tomando sulfato ferroso?</Text>
                <Picker
                    selectedValue={p3}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp3(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>     
                <Text style={styles.label} >Además de su leche le da fórmula (otra leche)?</Text>
                <Picker
                    selectedValue={p4}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp4(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >VERIFICACIÓN DE LA POSICIÓN Y EL BUEN AGARRE</Text>
                <Text style={styles.label} >¿La boca cubre casi toda la aureola del pezón y los labios sobresalen?</Text>
                <Picker
                    selectedValue={p5}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp5(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >¿El mentón y la nariz del bebé tocan el pecho?</Text>
                <Picker
                    selectedValue={p6}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp6(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >¿La madre carga correctamente al bebe para da de lactar? </Text>
                <Picker
                    selectedValue={p7}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp7(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >ALIMENTACIÓN DE LA MADRE</Text>
                <Text style={styles.label} >¿Cuántas veces consume al dia sus alimentos ?</Text>
                <Picker
                    selectedValue={p8}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp8(itemValue)}
                >
                    <Picker.Item label="5 veces al dia" value="a" />
                    <Picker.Item label="3 veces al dia" value="b" />

                </Picker>

                <Text style={styles.label} >¿Consume menestras (lentejas, frejoles, pallares, entre otros) 1 o 2 veces por semana?</Text>
                <Picker
                    selectedValue={p9}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp9(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >OBSERVACION</Text>
                <Text style={styles.label} >La madre usa mascarilla</Text>
                <Picker
                    selectedValue={p10}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp10(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >Estado de conservacion de la mascarilla</Text>
                <Picker
                    selectedValue={p11}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp11(itemValue)}
                >
                    <Picker.Item label="BUENO" value="bueno" />
                    <Picker.Item label="MALO" value="malo" />
                </Picker>
                <Text style={styles.label} >El niño (a) o algún familiar tiene caso confirmado de COVID19</Text>
                <Picker
                    selectedValue={p12}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp12(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >¿Algún miembro de la familia sufrió agresión física o psicológica? ¿Tu pareja tiene celos de tus amigos(a) ¿Te exige que te quedes en casa? ¿Temes por tu vida?</Text>
                <Picker
                    selectedValue={p13}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp13(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >GRACIAS POR SU ATENCION</Text>
            </View>

            <Button
                title='GUARDAR ENCUESTA'
                color="#D00E36"
                onPress={() => component.Formato1}>
            </Button>
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
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})
export default Formato5;