import React, { useState } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";

export default function Encuestado(props) {

    const { navigation, route } = props;
    const { id, nombre, categoria, celular } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    
    navigation.setOptions({ title: nombre })
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#5500dc" />
            </View>
        );
    }

    const Completar = () => {
        if (categoria === "gestante") {
            navigation.navigate("pregnant", {
                Eid: id,
                Enombre: nombre
            });
        }
        else {
            navigation.navigate("child", {
                Eid: id,
                Enombre: nombre
            });
        }
        //navigation.navigate("formato1");
    }
    const Llamada = () => {
        navigation.navigate("llamada", {
            Eid: id,
            Enombre: nombre,
            Ecelular:celular
        });
    }

    return (
        <View>
            <TouchableOpacity onPress={() => Completar()}>

                <View style={styles.metaInfo}>
                    <Text style={styles.title}>Completar Datos de {categoria}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Formatos()}>
                <View style={styles.metaInfo}>
                    <Text style={styles.title}>Encuesta Visita </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Llamada()}>
                <View style={styles.metaInfo}>
                    <Text style={styles.title}>Primera llamada </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Llamada()}>
                <View style={styles.metaInfo}>
                    <Text style={styles.title}>Segunda llamada </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#101010',
        marginTop: 60,
        fontWeight: '700'
    },
    listItem: {
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },

    metaInfo: {
        marginLeft: 20
    },
    title: {
        fontSize: 25,
        width: 300,
        padding: 5,
    }
});