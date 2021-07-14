import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button } from 'react-native';
import { Picker } from "@react-native-picker/picker"

const Formato2 = () => {
    const [p1, setp1] = useState("SI");
    const [p2, setp2] = useState("SI");
    const [p3, setp3] = useState("Sopas, caldos");
    const [p4, setp4] = useState("2 - 3 veces al día");
    const [p5, setp5] = useState("Sangrecita");
    const [p6, setp6] = useState("SI");
    const [p7, setp7] = useState("Consume en el mismo horario");
    const [p8, setp8] = useState("Se estriñe");
    const [p9, setp9] = useState("SI");
    const [p10, setp10] = useState("SI");
    const [p11, setp11] = useState("SI");
    const [p12, setp12] = useState("Le lee cuentos");
    const [p13, setp13] = useState("SI");
    const [p14, setp14] = useState("BUENO");
    const [p15, setp15] = useState("SI");
    const [p16, setp16] = useState("SI");
    return (
        <ScrollView>
            <View style={styles.formulario}>
                <Text style={styles.label} >ENCUESTA PARA NIÑOS DE 6 A 11 MESES</Text>
                <Text style={styles.label} >Edad en Meses</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log}
                />
                <Text style={styles.label} >OBSERVACION</Text>
                <Text style={styles.label} >¿El niño(a) o la madre tiene las manos limpias?</Text>
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
                <Picker
                    selectedValue={p2}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp2(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >"El niño(a) ¿Que le esta dando de comer? </Text>
                <Picker
                    selectedValue={p3}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp3(itemValue)}
                >
                    <Picker.Item label="Sopas, caldos" value="a" />
                    <Picker.Item label="Pures" value="b" />
                    <Picker.Item label="Alimentos picados" value="c" />
                    <Picker.Item label="Segundos" value="d" />
                </Picker>

                <Text style={styles.label} >¿Cuántas veces le dio de comer? </Text>
                <Picker
                    selectedValue={p4}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp4(itemValue)}
                >
                    <Picker.Item label="2 - 3 veces al día" value="a" />
                    <Picker.Item label="3 + 1 refrigerio" value="b" />
                    <Picker.Item label="5 veces al día" value="c" />
                </Picker>
                <Text style={styles.label} >¿El niño/niña Cuantas veces y que alimentos rico en Hierro consumió durante la semana?</Text>
                <Picker
                    selectedValue={p5}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp5(itemValue)}
                >
                    <Picker.Item label="Sangrecita" value="a" />
                    <Picker.Item label="Bazo" value="b" />
                    <Picker.Item label="Higado" value="c" />
                    <Picker.Item label="Bofe" value="d" />
                    <Picker.Item label="Pescado (Jurel, Caballa)" value="e" />
                </Picker>

                <Text style={styles.label} >EL NIÑO CONSUMIO SULFATO FERROSO</Text>
                <Text style={styles.label} >¿Dispone de insumo de hierro (Sulfato Ferroso)? MUESTRE EL FRASCO</Text>
                <Picker
                    selectedValue={p6}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp6(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >¿Cuantas gotas o que cantidad le esta dando por dia?</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log}
                />
                <Text style={styles.label} >Esta tomando la suplementacion (INDAGA SOBRE EL CONSUMO)</Text>

                <Picker
                    selectedValue={p7}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp7(itemValue)}
                >
                    <Picker.Item label="Consume en el mismo horario" value="a" />
                    <Picker.Item label="Consume junto a la lactancia materna" value="b" />
                    <Picker.Item label="Consume jugos citricos o agua hervida" value="c" />
                    <Picker.Item label="Consume 1 o 2 horas despues de lactar" value="d" />
                    <Picker.Item label="No toma" value="e" />
                </Picker>
                <Text style={styles.label} >Al tomar a notado algun efecto:  </Text>
                <Picker
                    selectedValue={p8}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp8(itemValue)}
                >
                    <Picker.Item label="Se estriñe." value="a" />
                    <Picker.Item label="Sus deposiciones están más oscuras (negras)." value="b" />
                    <Picker.Item label="Se le ha soltado el estómago" value="c" />
                    <Picker.Item label="Lo vomita." value="d" />
                    <Picker.Item label="Está enfermo." value="e" />
                    <Picker.Item label="No hay efecto." value="f" />
                </Picker>
                <Text style={styles.label} >VERIFICACION CON TARJETA</Text>
                <Text style={styles.label} >El niño(a) ¿Tuvo Dosaje de hemoglobina? </Text>
                <Picker
                    selectedValue={p9}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp9(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>

                <Text style={styles.label} >El niño(a) Fecha de ultimo dosaje de hemoglobina </Text>
                <TextInput
                    style={styles.input}
                    onCh
                    angeText={(texto) => console.log}
                />
                <Text style={styles.label} >El niño(a) Valor de la Hemoglobina con factor de corrección </Text>
                <TextInput
                    style={styles.input}
                    onCh
                    angeText={(texto) => console.log}
                />
                <Text style={styles.label} >¿El niño (a) ¿Recibió  control CRED ?</Text>
                <Picker
                    selectedValue={p10}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp10(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >¿El niño (a) ¿Recibió  vacuna? </Text>
                <Picker
                    selectedValue={p11}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp11(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>

                <Text style={styles.label} >¿Qué prácticas de aprendizaje realiza?</Text>
                <Picker
                    selectedValue={p12}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp12(itemValue)}
                >
                    <Picker.Item label="Le lee cuentos." value="a" />
                    <Picker.Item label="Le da muestras de afecto y protección" value="b" />
                    <Picker.Item label="Otros." value="c" />
                </Picker>
                <Text style={styles.label} >OBSERVACION</Text>
                <Text style={styles.label} >La madre usa mascarilla</Text>
                <Picker
                    selectedValue={p13}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp13(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >Estado de conservacion de la mascarilla</Text>
                <Picker
                    selectedValue={p14}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp14(itemValue)}
                >
                    <Picker.Item label="BUENO" value="bueno" />
                    <Picker.Item label="MALO" value="malo" />
                </Picker>
                <Text style={styles.label} >El niño (a) o algún familiar tiene caso confirmado de COVID19</Text>
                <Picker
                    selectedValue={p15}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp15(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >¿Algún miembro de la familia sufrió agresión física o psicológica?</Text>
                <Picker
                    selectedValue={p16}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp16(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >GRACIAS POR SU ATENCION</Text>
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
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})
export default Formato2;