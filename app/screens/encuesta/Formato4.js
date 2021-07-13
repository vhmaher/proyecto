import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView,Button } from 'react-native';
import { Picker } from "@react-native-picker/picker"

export default function Formato4 (props) {
    
    const { navigation,route } = props;
    const { Eid,Enombre } = route.params;

    const [p1, setp1] = useState("SI");
    const [p2, setp2] = useState("SI");
    const [p3, setp3] = useState("Sangrecita");
    const [p4, setp4] = useState("SI");
    const [p5, setp5] = useState("Todos los dias");
    const [p6, setp6] = useState("Consume en el mismo horario");
    const [p7, setp7] = useState("SI");
    const [p8, setp8] = useState("SI");
    const [p9, setp9] = useState("Dolor de cabeza");
    const [p10, setp10] = useState("SI");
    const [p11, setp11] = useState("BUENO");
    const [p12, setp12] = useState("SI");
    const [p13, setp13] = useState("SI");
    const [p14, setp14] = useState("SI");

    return (
        <ScrollView>
            <View style={styles.formulario}>
                <Text style={styles.label} >ENCUESTA PARA {Enombre}</Text>
                <Text style={styles.label} >Edad en semanas de gestacion</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log}
                />
                <Text style={styles.label} >OBSERVACION</Text>
                <Text style={styles.label} >¿La gestante tiene las manos limpias?</Text>
                <Picker
                    selectedValue={p1}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp1(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >Autocuidado (Se encuentra aseada , peinada , etc)</Text>
                <Picker
                    selectedValue={p2}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp2(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>     
                <Text style={styles.label} >¿Usted cuantas veces y que alimentos rico en Hierro consumió?</Text>
                <Picker
                    selectedValue={p3}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp3(itemValue)}
                >
                    <Picker.Item label="Sangrecita" value="a" />
                    <Picker.Item label="Bazo" value="b" />
                    <Picker.Item label="Higado" value="c" />
                    <Picker.Item label="Bofe" value="d" />
                    <Picker.Item label="Pescado (Jurel, Caballa)" value="e" />
                </Picker>
                <Text style={styles.label} >LA GESTANTE CONSUMIO SULFATO FERROSO</Text>
                <Text style={styles.label} >¿Dispone de insumo de hierro (Sulfato Ferroso)? VERIFICAR</Text>
                <Picker
                    selectedValue={p4}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp4(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >¿Cuantas veces consumio su Sulfato Ferroso?</Text>
                <Picker
                    selectedValue={p5}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp5(itemValue)}
                >
                    <Picker.Item label="Todos los dias" value="a" />
                    <Picker.Item label="Entre 1 o 5 veces la semana" value="b" />

                </Picker>
                <Text style={styles.label} >Esta tomando la suplementacion y como lo toma</Text>
                <Picker
                    selectedValue={p6}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp6(itemValue)}
                >
                    <Picker.Item label="Consume en el mismo horario" value="a" />
                    <Picker.Item label="Consume jugos citricos o agua hervida" value="b" />
                    <Picker.Item label="Consume 1 o 2 horas despues de la comida" value="c" />
                    <Picker.Item label="No toma" value="d" />
                </Picker>
                <Text style={styles.label} >A Ud ¿Le hicieron  dosaje de anemia  en el EE.SS?</Text>
                <Picker
                    selectedValue={p7}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp7(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >Fecha de último dosaje de anemia en el EE.SS.</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log}
                />
                <Text style={styles.label} >¿Ultima fecha de  Atencion Pre Natal? </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(texto) => console.log}
                />
                <Text style={styles.label} >Ud. Participa en las sesiones de Psicoprofilaxis </Text>
                <Picker
                    selectedValue={p8}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp8(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>

                <Text style={styles.label} >¿Ud.   Presenta o a presentado los siguientes sintomas?</Text>
                <Picker
                    selectedValue={p9}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp9(itemValue)}
                >
                    <Picker.Item label="Dolor de cabeza" value="a" />
                    <Picker.Item label="Mareos" value="b" />
                    <Picker.Item label="Vision Borrosa" value="c" />
                    <Picker.Item label="Fiebre" value="d" />
                    <Picker.Item label="Bebe no se mueve" value="e" />
                    <Picker.Item label="Sangrado Vaginal" value="f" />
                    <Picker.Item label="Pérdida de liquido" value="g" />
                    <Picker.Item label="No tiene" value="h" />
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
                <Text style={styles.label} >La gestante o algún familiar tiene caso confirmado de COVID19</Text>
                <Picker
                    selectedValue={p12}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp12(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >Su pareja se preocupa por Ud. Y  el embarazo</Text>
                <Picker
                    selectedValue={p13}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp13(itemValue)}
                >
                    <Picker.Item label="SI" value="si" />
                    <Picker.Item label="NO" value="no" />
                </Picker>
                <Text style={styles.label} >¿Algún miembro de la familia sufrió agresión física o psicológica?</Text>
                <Picker
                    selectedValue={p14}
                    style={styles.input}
                    mode={"dialog"}
                    onValueChange={(itemValue) => setp14(itemValue)}
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
